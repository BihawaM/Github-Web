import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
findName : string = ""

@Output() findTerm = new EventEmitter<any>();
  constructor() { }
  searchName(){
    this.findTerm.emit(this.findName)
    this.findName = ""
  }

  ngOnInit(): void {
  }

}
