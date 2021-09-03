import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title:string;

  constructor() {}

  /**
   * Method for set title in menu
   *
   * @param value title
   */
  setTitle(value:string) {
    this.title = value;
  }
}
