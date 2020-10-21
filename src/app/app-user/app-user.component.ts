import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userModel } from '../userModel/to-doH1.model';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.css']
})
export class AppUserComponent implements OnInit {
  @Input() appuser: userModel;
  @Output() userGamodzaxeba = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  userGamodzaxebafunc() {
    const userId = this.appuser.id;
    console.log(userId);
    this.userGamodzaxeba.emit(userId);
  }

}
