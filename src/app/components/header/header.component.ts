import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  //@Output() menuChange = new EventEmitter();


  constructor(private router:Router,public events: Events) {}

  menuOne(){
    this.events.publish('menuId', 1);
  //  this.menuChange.emit('1');
  }
  menuTwo(){
    this.events.publish('menuId', 2);
   // this.menuChange.emit(2);
  }
  menuThree(){
    this.events.publish('menuId', 3);
   // this.menuChange.emit(3);

  }
  menuFour(){
    this.events.publish('menuId', 4);
   // this.menuChange.emit(4);

  }

  ngOnInit() {}

}
