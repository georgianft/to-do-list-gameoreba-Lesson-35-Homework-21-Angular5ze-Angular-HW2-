import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
@Input() counterStartValue: number
@Output() counterChanged = new EventEmitter() 
@Output() counterEntered = new EventEmitter() 
  constructor() { }

  ngOnInit(): void {
  }

  // visrolo event mshobeli componentistvis,rom counter sheicvala
  changeCounter() {
    this.counterChanged.emit();
  }

  inputChanged(event) {
    const value = parseInt(event.target.value);
    this.counterEntered.emit(value);
  }
}
