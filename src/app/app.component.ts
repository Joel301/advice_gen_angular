import { Component, OnInit } from '@angular/core';
import { Advice } from './advice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  advice: Advice;

  constructor() {
    this.advice = {
      id: -1,
      advice: ""
    }
  }

  ngOnInit(): void {
    if (!this.advice || this.advice.id == -1) {
      this.getAdvice()
    }
    console.log("me inicie")
  }

  getAdvice() {
    console.log('initAdvice')
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        let { slip } = data
        this.advice = {
          id: slip.id,
          advice:slip.advice
        }
        return //setAdvice({ ...data })
      })
    //.then(() => {
    //setLoad(true)
    //});
  }
}
