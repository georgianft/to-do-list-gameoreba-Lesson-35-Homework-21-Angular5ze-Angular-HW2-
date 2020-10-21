import { Component } from '@angular/core';
import { element } from 'protractor';
import { customInput, TodoModel } from './models/to-do.model';
import { userModel } from './userModel/to-doH1.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<TodoModel> = [
    new TodoModel(0, 'ძაღლის გასეირნება', '7ზე უნდა გავასეირნო ჩარლი'),
    new TodoModel(1, 'კატის გასეირნება', '7ზე უნდა გავასეირნო ტოტო'),
    new TodoModel(2, 'კატა2 გასეირნება', '7ზე უნდა გავასეირნო ტოტო'),
  ];
  users: Array<userModel> = [
    new userModel(1, 'giorgi', 28),
    new userModel(2, 'Jack', 30),
    new userModel(3, 'george', 32),
  ];
  // todosaxali(event){
    // todosaxali: Array<TodoModel> = (JSON.parse(localStorage.getItem("darchenilipetJSON")).value);
    // console.log(todosaxali);
  // }
  
  
  disabled = true;
  counter: number = 0;
  onCounterEntered(event) {
    console.log(event);
    this.counter = event;
  }

  deleteTOdoFunc(id) {
    // this.todosaxali= event;
    console.log(id);
    console.log(this.todos);
    // console.log(this.todosaxali);
    const myObj = { value: this.todos[id] };
    const myJSON = JSON.stringify(myObj);
    localStorage.setItem("currentpetJSON", myJSON);
    const removedelement0 = localStorage.getItem("currentpetJSON");
    console.log(removedelement0);
    const removedelement = JSON.parse(localStorage.getItem("currentpetJSON"));
    console.log(removedelement.value);
    // Storing alldata:
    const myObj2 = { all: this.todos };
    console.log(myObj2);
    const myJSON2 = JSON.stringify(myObj2);
    console.log(myJSON2);
    // var res = myJSON2.replace(removedelement0.valueg, '');
    // console.log(res);
    console.log(myObj2.all);
    for (let i = 0; i < myObj2.all.length; i++) {
      const element = myObj2.all[i];
      const elementJSON = JSON.stringify(element);
      localStorage.setItem("elementJSON", elementJSON);
      console.log(element);
      console.log(element.id);
      if(id === element.id)
        this.todos.splice(element.id,1)
    }
    // const index = myObj2.all.indexOf(removedelement.value);
    // if (index > -1) {
    // this.todos.splice(index, 1);
    // }
    console.log(this.todos);
    const myObj3 = { value: this.todos };
    const myJSON3 = JSON.stringify(myObj3);
    localStorage.setItem("darchenilipetJSON", myJSON3);
    const todosaxali= (JSON.parse(localStorage.getItem("darchenilipetJSON")).value);
    console.log(todosaxali);
    const list = document.getElementById("cat-list");
    //         while (list.hasChildNodes()) {
    //         list.removeChild(list.firstChild);
    //         }
    list.innerHTML = '';

    console.log(localStorage.getItem("currentpetJSON"));
    const darchenili = JSON.parse(localStorage.getItem("currentpetJSON"));
    console.log(darchenili.value);
    console.log(this.todos);
      

    
    console.log(this.todos);
    const darchenilipet = myObj2.all
    console.log(darchenilipet);
    
    // const appendStatement = (darchenilipet) => {
      for (let f = 0; f < darchenilipet.length; f++) {
        const element2 = darchenilipet[f];
        const title = element2.title;
        const description = element2.description;
        console.log(element2);
        // title localstorage set-get
        const myObj5 = { value: element2 };
        const myJSON5 = JSON.stringify(myObj5);
        localStorage.setItem("titleJSON", myJSON5);
        const element2final = JSON.parse(localStorage.getItem("titleJSON"));
        const myObj6 = { value: description };
        const myJSON6 = JSON.stringify(myObj6);
        localStorage.setItem("description2final", myJSON6);
        const description2final = JSON.parse(localStorage.getItem("descriptionJson"));


        console.log(element2final);
        console.log(description2final);
        console.log(element2.title);
        console.log(element2.id);
        console.log(String(element2.title));
        console.log(String(element2.description));
        // list.innerHTML += new TodoModel((element2).id, (element2).title, (element2).description,);
        // list.innerHTML += ((element2).id + (element2).title + description);
        
        // const value1title = 
        // const value2description =;
      // const test =((element2).id + (element2).title + description);
      // const test: Array<TodoModel>  = this.todos;
      const test = this.todos;
      const testArray = test;
      console.log(testArray);
      // const test3 =(element2.id), parseFloat(element2.title), parseFloat(element2.description);
      // console.log(test3);
      // const todosaxali: Array<TodoModel> = (JSON.parse(localStorage.getItem("darchenilipetJSON")).value);
      // const todosaxali: Array<TodoModel> = new TodoModel((element2.id), parseFloat(element2.title), parseFloat(element2.description);
      console.log(test)
      console.log(todosaxali)
      const statementTemplate = `
      <app-to-do [todo]=${test} (delete_ToDo) = "deleteTOdoFunc($event)"></app-to-do>;`
     
      // list.innerHTML += ((element2).id + (element2).title + description);
      list.innerHTML += statementTemplate;
      
      // list.innerHTML += statementTemplate;
        // if(id === element2.id)
        //   this.todos.splice(f,1)
        //   break;
      // }
      // console.log(statementTemplate);
    // }
    
    // appendStatement(darchenilipet);
    
    // const appendAllStatements = (todos) => {
    //   list.innerHTML = '';
    //   console.log(todos)
    //   for (const darchenilipet of todos) {
    //       appendStatement(darchenilipet);
    //   }
    //   appendAllStatements(this.todos);
    //   console.log(appendAllStatements(darchenilipet));
      // const delete_ToDo = 'string';
      // const valuedelete_ToDo = (delete_ToDo);
      // const valuedelete_ToDovalue = "=deleteTOdoFunc($event)"
      // const daxurva = String('></app-to-do>');
      // console.log(daxurva);
      // console.log("<app-to-do [todo]='element2'");
      // list.innerHTML += "<app-to-do [todo]='element2'";
      // const myObj4 = { value: '<app-to-do [todo]="todos[0]" (delete_ToDo) = "deleteTOdoFunc($event)"></app-to-do>' };
      // const myJSON4 = JSON.stringify(myObj4);
      // localStorage.setItem("element2tohtmlJSON", myJSON4);
      // $("#test3").val("Dolly Duck");
      // $(document).ready(function(){
      // $("#cat-list").[todo].val(titlevalue);
      // const forhtml = '<app-to-do [todo]="element2" (delete_ToDo) = "deleteTOdoFunc($event)"></app-to-do>';
      // console.log(forhtml);
      // list.innerHTML += '<app-to-do [todo]="this.todos[f]" (delete_ToDo) = "deleteTOdoFunc($event)"></app-to-do>'
      // };
    // }
    
    
    // console.log(finalarray);
    
    // for (let i = 0; i < this.todos.length; i++) {
    //   if(id === this.todos[i].id)
    //     this.todos.splice(i,1)
    //     break;
    // }
    
  }
  // todosaxali = [new TodoModel(0, 'ძაღლის გასეირნება', '7ზე უნდა გავასეირნო ჩარლი')];
}

}
