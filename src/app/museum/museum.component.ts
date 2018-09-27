import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.less']
})
export class MuseumComponent implements OnInit {
  FairmontMotorcar: String = 'assets/images/FairmontMotorcar.jpg';
  SignalSpotlight: String = 'assets/images/SignalSpotlight.jpg';
  Headlight: String = 'assets/images/Headlight.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
