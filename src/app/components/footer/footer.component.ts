import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  today:any='';
  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      let now = new Date();
      this.today = now;
      }, 1000);
   }

}
