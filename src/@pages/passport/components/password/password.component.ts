import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordComponent implements OnInit {

  changeDetectiion: string = "Hello World - 0";
  count: number = 0;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

}
