import { Component, OnInit, ViewChild  } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Topic } from '../model/topic';
import { TopicService } from '../service/topic.service';
import { IonSlides } from '@ionic/angular';
import { GalleryService } from '../service/gallery.service';
import { Image } from '../model/image';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public topics: Array<Topic>;
  public images: Array<Image>;
  public user = [];

  @ViewChild('sliderWithNavigation', { static: false }) sliderWithNavigation: IonSlides;

  isHidden = true;
  gallerySlider: any;

  sliderOptions = {
    initialSlide    : 0,
    slidesPerView   : 1,
    loop            : false,
    centeredSlides  : true,
    spaceBetween    : 20
  };

  constructor(
    private navCtrl: NavController,
    private topicService: TopicService,
    private galleryService: GalleryService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // Fetch current user details
    this.databaseService.checkCurrentUser().subscribe(res => {
      if( res['values'].length > 0 ) {
        this.user = res['values']['0'];
      }
    });

    this.topics = this.topicService.getTopics();
    this.images = this.galleryService.getGallery();

    this.gallerySlider = {
      isBeginningSlide  : true,
      isEndSlide        : false,
      slidesItems       : this.images
    };

  }

  public openTopic(topicId: number): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          topicId : topicId
      }
    };

    this.navCtrl.navigateForward(["single-topic"], navigationExtras);
  }

  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  showLightbox( imgId = null ){
    if( imgId !== null ) this.sliderOptions.initialSlide = imgId;
    this.isHidden = false;
  }

  hideLightbox(){
    this.isHidden = true;
    this.sliderOptions.initialSlide = 0;
  }
  
  goToVirtualLab(){
    this.navCtrl.navigateForward('dissection');
  }

}
