import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imagen

  constructor(public navCtrl: NavController, public camera: Camera) {

  }

   options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  takePicture() {

    this.camera.getPicture().then((fotoActual) => {
      this.imagen = fotoActual;
    }, (err)=>{
      
      console.error('error');
    })

  }

}
