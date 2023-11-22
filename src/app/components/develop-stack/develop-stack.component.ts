import { TitleService } from '../../title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-develop-stack',
  templateUrl: './develop-stack.component.html',
  styleUrls: ['./develop-stack.component.scss'],
})
export class DevelopStackComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Development Stack');
  }
}
