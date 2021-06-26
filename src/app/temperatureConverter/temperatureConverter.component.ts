import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  c: any;
  f: any;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  onChanged(value: any, type: any) {

    if (value) {

      if (type === 'c') {
        let feh = value * 9 / 5 + 32;
        this.f = feh.toFixed(1); // To approximate the value to the nearst first 1 decimal
      } else {
        let cel = (value - 32) * 5 / 9;
        this.c = cel.toFixed(1);
      }

    } else {
      this.c = null;
      this.f = null;
    }

  }



}