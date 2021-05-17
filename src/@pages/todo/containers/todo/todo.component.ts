import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FooterInfo, HeaderInfo } from 'src/@share/models/core';
import { TodoItemInfo, TodoStatusEnum } from 'src/@share/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  public headerInfo: HeaderInfo = { title: "Todo List", isVisible: true };
  public footerInfo: FooterInfo = { title: "Add New Todo", isVisible: true };
  public todoItemInfos: TodoItemInfo[] = [
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
    { title: "Inject vaccine", createDate: "2021-05-16", expectDate: "2021-05-20", status: TodoStatusEnum.waiting },
  ];
  constructor() { }

  ngOnInit() {
  }

}
