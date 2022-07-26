import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievments',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  public categories: Array<string>;
  public selectedCategory: string;

  constructor() { }

  ngOnInit(): void {
    this.categories = ['Все', 'Диплом', 'Сертификат'];
    this.selectedCategory = this.categories[0];
  }

  setCategory(cat: string) {
    this.selectedCategory =  cat;
  }
}
