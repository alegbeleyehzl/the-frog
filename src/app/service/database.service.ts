import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import '@capacitor-community/sqlite';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
 
import { JsonSQLite } from '@capacitor-community/sqlite';
import { Device } from '@capacitor/device';
import { Storage } from '@capacitor/storage';
const { CapacitorSQLite } = Plugins;
 
const DB_SETUP_KEY = 'first_db_setup';
const DB_NAME_KEY = 'db_name';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  dbReady = new BehaviorSubject(false);
  dbName = 'the_frog_db';

  constructor(private http: HttpClient, private alertCtrl: AlertController) { }

  async init(): Promise<void> {
    const info = await Device.getInfo();
 
    if (info.platform === 'android') {
      try {
        const sqlite = CapacitorSQLite as any;
        await sqlite.requestPermissions();
        this.setupDatabase();
      } catch (e) {
        const alert = await this.alertCtrl.create({
          header: 'No DB access',
          message: 'This app can\'t work without Database access.',
          buttons: ['OK']
        });
        await alert.present();
      }
    } else {
      this.setupDatabase();
    }
  }
 
  private async setupDatabase() {
    const dbSetupDone = await Storage.get({ key: DB_SETUP_KEY });

    if (!dbSetupDone.value) {
      this.downloadDatabase();
    } else {
      this.dbName = (await Storage.get({ key: DB_NAME_KEY })).value;
      await CapacitorSQLite.createConnection({ database: this.dbName });
      await CapacitorSQLite.open({ database: this.dbName });
      this.dbReady.next(true);
    }
  }

  // Sync your data on every app start and update the device DB
  private downloadDatabase(update = false) {
    this.http.get('./assets/db.json').subscribe(async (jsonExport: JsonSQLite) => {
      const jsonstring = JSON.stringify(jsonExport);
      const isValid = await CapacitorSQLite.isJsonValid({ jsonstring });
 
      if (isValid.result) {
        this.dbName = jsonExport.database;
        await Storage.set({ key: DB_NAME_KEY, value: this.dbName });
        await CapacitorSQLite.importFromJson({ jsonstring });
        await Storage.set({ key: DB_SETUP_KEY, value: '1' });

        await CapacitorSQLite.createConnection({ database: this.dbName });
        await CapacitorSQLite.open({ database: this.dbName });
 
        // Your potential logic to detect offline changes later
        if (!update) {
          await CapacitorSQLite.createSyncTable({database: this.dbName});
        } else {
          await CapacitorSQLite.setSyncDate({ syncdate: '' + new Date().getTime() })
        }
        this.dbReady.next(true);
      }
    });
  }

  /** GETTERS **/
  getUsers(){
    return this.dbReady.pipe(
      switchMap(isReady => {
        if (!isReady) {
          return of({ values: [] });
        } else {
          const statement = 'SELECT id, username FROM user;';
          const dbName = this.dbName;
          return from(CapacitorSQLite.query({ database: dbName, statement, values: [] }));
        }
      })
    )
  }
  
  getUser(username){
    return this.dbReady.pipe(
      switchMap(isReady => {
        if (!isReady) {
          return of({ values: [] });
        } else {
          const statement = 'SELECT username FROM user;';
          const dbName = this.dbName;
          return from(CapacitorSQLite.query({ database: dbName, statement, values: [] }));
        }
      })
    )
  }

  getTopics( id ){
    return this.dbReady.pipe(
      switchMap(isReady => {
        if (!isReady) {
          return of({ values: [] });
        } else {
          const statement = `SELECT * FROM utopics WHERE userId = ${id};`;
          const dbName = this.dbName;
          return from(CapacitorSQLite.query({ database: dbName, statement, values: [] }));
        }
      })
    )
  }

  getAssessments(id){
    return this.dbReady.pipe(
      switchMap(isReady => {
        if (!isReady) {
          return of({ values: [] });
        } else {
          const statement = `SELECT * FROM uassessment WHERE userId = ${id};`;
          const dbName = this.dbName;
          return from(CapacitorSQLite.query({ database: dbName, statement, values: [] }));
        }
      })
    )
  }

  /** SAVING **/
  registerUser(params) {
    const statement = `INSERT INTO user (firstname, lastname, username, password, is_logged_in) VALUES ('${params.firstname}','${params.lastname}','${params.username}', '${params.password}', 0);`;
    const dbName = this.dbName;
    return CapacitorSQLite.execute({ database: dbName, statements: statement });
  }

  updateUser( id, params ){
    const statement = `UPDATE user SET username = '${params.username}', firstname = '${params.firstname}', lastname = '${params.lastname}' WHERE id = ${id};`;
    const dbName = this.dbName;
    return CapacitorSQLite.execute({ database: dbName, statements: statement });
  }

  updatePassword( id, params ){
    const statement = `UPDATE user SET password = '${params.password}' WHERE id = ${id};`;
    const dbName = this.dbName;
    return CapacitorSQLite.execute({ database: dbName, statements: statement });
  }

  updateUTopic( params: { status: number; score: number; rating: number; userId: number; topicId: number;} ){
    const statement = `UPDATE utopics SET status = '${params.status}', score = '${params.score}', rating = '${params.rating}' WHERE userId = ${params.userId} and topicId = ${params.topicId};`;
    const dbName = this.dbName;
    return CapacitorSQLite.execute({ database: dbName, statements: statement });
  }

  updateUAssessment( params: { userId: any; assessmentType?: number; score: any; rating: any; retakes?: number; status: any; topicId?: any; } ){
    const statement = `UPDATE uassessment SET status = '${params.status}', score = '${params.score}', rating = '${params.rating}', retakes = '${params.retakes}' WHERE userId = ${params.userId} and assessmentType = ${params.assessmentType};`;
    const dbName = this.dbName;
    return CapacitorSQLite.execute({ database: dbName, statements: statement });
  }

  saveUTopic( params ){
    const statement = `INSERT INTO utopics (topicId, status, quizId, score, rating, userId) VALUES ('${params.topicId}','${params.status}','${params.quizId}', '${params.score}', '${params.rating}', '${params.userId}');`;
    const dbName = this.dbName;
    return CapacitorSQLite.execute({ database: dbName, statements: statement });
  }

  saveUAssessment( params ){
    const statement = `INSERT INTO uassessment (assessmentType, status, score, rating, userId, retakes) VALUES ('${params.assessmentType}','${params.status}', '${params.score}', '${params.rating}', '${params.userId}', '${params.retakes}');`;
    const dbName = this.dbName;
    return CapacitorSQLite.execute({ database: dbName, statements: statement });
  }

  /** VALIDATIONS **/
  verifyUser( data ){
    return this.dbReady.pipe(
      switchMap(isReady => {
        if (!isReady) {
          return of({ values: [] });
        } else {
          const statement = `SELECT id, firstname, lastname, username FROM user WHERE username = '${data.username}' AND password = '${data.password}';`;
          const dbName = this.dbName;
          return from(CapacitorSQLite.query({ database: dbName, statement, values: [] }));
        }
      })
    )
  }

  checkUsername( params ){
    return this.dbReady.pipe(
      switchMap(isReady => {
        if (!isReady) {
          return of({ values: [] });
        } else {
          const statement = `SELECT id, username FROM user WHERE username = '${params.username}';`;
          const dbName = this.dbName;
          return from(CapacitorSQLite.query({ database: dbName, statement, values: [] }));
        }
      })
    )
  }

  loginUser(id) {
    const statement = `UPDATE user SET is_logged_in = 1 WHERE id = ${id};`;
    const dbName = this.dbName;
    return CapacitorSQLite.execute({ database: dbName, statements: statement });
  }

  logoutUser(id){
    const statement = `UPDATE user SET is_logged_in = 0 WHERE id = ${id};`;
    const dbName = this.dbName;
    return CapacitorSQLite.execute({ database: dbName, statements: statement });
  }

  checkCurrentUser(){
    return this.dbReady.pipe(
      switchMap(isReady => {
        if (!isReady) {
          return of({ values: [] });
        } else {
          const statement = 'SELECT id, firstname, lastname, username, password FROM user WHERE is_logged_in = 1;';
          const dbName = this.dbName;
          return from(CapacitorSQLite.query({ database: dbName, statement, values: [] }));
        }
      })
    )
  }


}
