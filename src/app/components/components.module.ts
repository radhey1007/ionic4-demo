import { MenuFourComponent } from './menu-four/menu-four.component';
import { MenuThreeComponent } from './menu-three/menu-three.component';
import { MenuTwoComponent } from './menu-two/menu-two.component';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent , FooterComponent , MainContentComponent , MenuOneComponent , MenuTwoComponent , MenuThreeComponent, MenuFourComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent , FooterComponent , MainContentComponent , MenuOneComponent , MenuTwoComponent , MenuThreeComponent, MenuFourComponent]
})
export class ComponentsModule { }
