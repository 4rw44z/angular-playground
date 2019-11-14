import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.css']
})
export class AddtodosComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title:string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    const todo = {
      title: this.title,
    }
    this.addTodo.emit(todo);
  }
}
