import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
IonContent,
IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
arrowBackCircleOutline,
location
} from 'ionicons/icons';

@Component({
selector: 'app-detail-lapangan',
templateUrl: './detail-lapangan.page.html',
styleUrls: ['./detail-lapangan.page.scss'],
standalone: true,
imports: [
IonContent,
IonIcon,
CommonModule,
FormsModule
]
})
export class DetailLapanganPage {

court: any;

constructor() {

addIcons({
  arrowBackCircleOutline,
  location
});

const nav = history.state;

if (nav.court) {
  this.court = nav.court;
}

}

}
