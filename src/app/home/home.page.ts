import { Events } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menuID:number= 0;

  constructor(public events: Events,
    ) {
    this.events.subscribe('menuId', menuId => {
      console.log('menu id in home page' + menuId);
      this.menuID = menuId;
    },err=>{
      //this.menuID = 0;
      console.log('ewrr in ' + err);
    });

  }

}
