import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HeaderInfo, HeaderButtonInfo } from 'src/@share/models/core/index'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() headerInfo: HeaderInfo = { title: "", isVisible: true };
  @Input() startButton: HeaderButtonInfo = { text: "Hi", position: "start", icon: "add", isVisible: false };
  @Input() endButton: HeaderButtonInfo = { text: "Hi", position: "end", icon: "add", isVisible: false };
  constructor() { }

  ngOnInit() {
  }

}
