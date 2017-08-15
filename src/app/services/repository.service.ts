import { Injectable } from '@angular/core';

@Injectable()
export class RepositoryService {

  private todoItems : string[] = [];

  constructor() { }

  saveTodo(todoToSave: string) {
    if (todoToSave) {
      this.todoItems.push(todoToSave);
    }
  }

  removeTodo(todoToRemove: string) {
    if(todoToRemove){
      let index = this.todoItems.indexOf(todoToRemove);
      if(index > -1){
        this.todoItems.splice(index, 1);
      }
    } 
  }

  getTodos():string[] {
    return this.todoItems;
  }

}
