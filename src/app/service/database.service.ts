import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbInstance: SQLiteObject;
  readonly db_name: string = "thefrog.db";
  readonly db_table: string = "user";
  USERS: Array <any> ;

  constructor(
    private platform: Platform,
    private sqlite: SQLite    
  ) { 
    this.databaseConn();
  }

  // Create SQLite database 
  databaseConn() {
    this.platform.ready().then(() => {
      this.sqlite.create({
          name: this.db_name,
          location: 'default'
        }).then((sqLite: SQLiteObject) => {
          this.dbInstance = sqLite;
          sqLite.executeSql(`
              CREATE TABLE IF NOT EXISTS ${this.db_table} (
                id INTEGER PRIMARY KEY NOT NULL, 
                firstname varchar(255),
                lastname varchar(255),
                username varchar(255),
                password varchar(255),
                is_logged_in integer(11)
              )`, [])
            .then((res) => {
              // alert(JSON.stringify(res));
            })
            .catch((error) => alert(JSON.stringify(error)));
        })
        .catch((error) => alert(JSON.stringify(error)));
    });   
  }

  // Crud

  public addUser( data ) {
    // validation
    // if (!n.length || !e.length) { 
    //   alert('Provide both email & name');
    //   return;
    // }
    this.dbInstance.executeSql(`
    INSERT INTO ${this.db_table} (firstname, lastname, username, password, is_logged_in) VALUES ('${data.firstname}', '${data.lastname}', '${data.username}', '${data.password}', '${data.is_logged_in}')`, [])
      .then(() => {
        alert("Success");
        this.getAllUsers();
      }, (e) => {
        alert(JSON.stringify(e.err));
      });
  }

  getAllUsers() {
    return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
      this.USERS = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          this.USERS.push(res.rows.item(i));
        }
        return this.USERS;
      }
    },(e) => {
      alert(JSON.stringify(e));
    });
  }

  // Get user
  getUser(id): Promise<any> {
    return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE id = ?`, [id])
    .then((res) => { 
      return res;
      // return {
      //   user_id: res.rows.item(0).user_id,
      //   name: res.rows.item(0).name,  
      //   email: res.rows.item(0).email
      // }
    });
  }

  // Update
  updateUser(data, id) {
    return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET firstname = ?, lastname = ?, username = ?, password = ? WHERE id = ${id}`, data)
  }  

  // Delete
  deleteUser(id) {
    this.dbInstance.executeSql(`
    DELETE FROM ${this.db_table} WHERE id = ${id}`, [])
      .then(() => {
        alert("User deleted!");
        this.getAllUsers();
      })
      .catch(e => {
        alert(JSON.stringify(e))
      });
  }
}
