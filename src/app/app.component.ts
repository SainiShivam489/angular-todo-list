import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-classes1';
  todoListArray:any[] = [];

  addTodo(form : NgForm) {
    this.todoListArray.push({todo : form.value.todoText, completed : false});
    form.reset();
  }

  completeTask(data) {
    this.todoListArray.forEach((todo) => {
      if(todo.todo == data.todo) {
        todo.completed = true;
      }
    });
    //console.log(this.todoListArray);
  }

  todoDeleted(data) {
    const newArray = this.todoListArray.filter((todo) => todo.todo !== data.todo);
    this.todoListArray = newArray;
  }
}
