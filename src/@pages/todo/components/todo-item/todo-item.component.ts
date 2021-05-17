import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TodoItemInfo } from 'src/@share/models/todo/index';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input("item") todoItemInfo: TodoItemInfo;

  constructor() { }

  ngOnInit() {
  }

}
