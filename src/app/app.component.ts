import { Component, Inject, LOCALE_ID } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  config: {[key:string]:string|Date} = null;

  constructor(){
    this.config = {
      title:"Lista zadań",
      footer:'© Lista zadań, All rights reserved.',
      date:new Date()
    };
  }
  /*title = 'Moja lista zadań';

  get footer():string{
    return '© Lista zadań,All rights reserved.';
  }

  getDate():Date{
    return new Date();
  }

  constructor(@Inject(LOCALE_ID) private localeId:string){
    console.log(localeId);
  }*/
}
