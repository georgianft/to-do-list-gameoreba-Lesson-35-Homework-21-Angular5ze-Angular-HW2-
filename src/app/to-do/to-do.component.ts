import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from '../models/to-do.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() delete_ToDo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo() {
    // this.todo.id
    const todoid = this.todo.id;
    console.log(todoid);
    this.delete_ToDo.emit(todoid);
  }
}
