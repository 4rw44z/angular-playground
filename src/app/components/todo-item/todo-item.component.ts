import { TodoService } from './../../services/todo.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../models/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService){}
  @Output() deleteTodo: EventEmitter<Todo>= new EventEmitter<Todo>(); 
  ngOnInit() {
  }
  setClassess(){
    let classes = {
      todo: true,
      'is-completed': this.todo.completed,
    }
    return classes
  }
  onToggle(todo){
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe( todo =>
      console.log(todo));
  }
  onDelete(todo){
    this.deleteTodo.emit(todo);
  }
}
