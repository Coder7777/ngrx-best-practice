import { TodoStatusEnum } from "./index";

export interface TodoItemInfo {
  title: string,
  createDate: string,
  expectDate: string,
  status: TodoStatusEnum
}
