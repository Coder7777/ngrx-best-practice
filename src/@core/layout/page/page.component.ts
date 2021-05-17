import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HeaderInfo } from 'src/@share/models/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
