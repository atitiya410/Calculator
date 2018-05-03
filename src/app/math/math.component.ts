import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
 
})

export class MathComponent implements OnInit {
  operation:string[] = ['', '', ''];
  display:string = '';
  subDisplay:string = '';
  activeBuildingNumber:string = '';

  buildNumber(num:string): void{
    this.activeBuildingNumber += num;
    // if operator is defined, set second variable
    if(this.operation[1].length) {
      this.operation[2] = this.activeBuildingNumber;
    }
    // else set first variable
    else {
      this.operation[0] = this.activeBuildingNumber;
      this.subDisplay = '';
    }

    this.renderDisplay();
  }

  // render display
  renderDisplay(): void {
    this.display = this.operation.join(' ');
  }

  //
  selectOperator(operator:string): void {
    this.operation[1] = operator;
    this.activeBuildingNumber = '';
    this.renderDisplay();
  }

  showResult(): void {
    if( this.confirmInputs() ) {
      let cal = this.calculateResult();
      this.display = ''+cal;
      this.operation.join(' ');

      this.resetOperation()
    }
  }

  resetOperation():void {
    this.operation = ['', '', ''];
    this.activeBuildingNumber = '';
  }
  reset():void {
    this.operation = ['', '', ''];
    this.activeBuildingNumber = '';
    this.display = '';
    this.subDisplay= '';
  }

  confirmInputs():boolean {

    return true;
  }

  calculateResult():number {
    switch(this.operation[1]) {
      case '*':
        return parseFloat(this.operation[0]) * parseFloat(this.operation[2]);
      case "+":
        return parseFloat(this.operation[0]) + parseFloat(this.operation[2]);
      case "-":
        return parseFloat(this.operation[0]) - parseFloat(this.operation[2]);
      case "/":
        return parseFloat(this.operation[0]) / parseFloat(this.operation[2]);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
