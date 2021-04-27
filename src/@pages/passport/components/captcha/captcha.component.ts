import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaptchaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
