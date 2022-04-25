import { Component, OnInit } from '@angular/core';
import { navigateto } from 'src/utils/micro';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  navto(path: string) {
    navigateto(path);
  }
}
