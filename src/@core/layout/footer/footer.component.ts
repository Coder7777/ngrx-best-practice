import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FooterInfo } from '../../../@share/models/core/index';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  @Input() footerInfo: FooterInfo = { title: "", isVisible: true };

  constructor() { }

  ngOnInit() {
  }

}
