import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-museum-info',
  templateUrl: './museum-info.component.html',
  styleUrls: ['./museum-info.component.css']
})
export class MuseumInfoComponent implements OnInit {
  StationResized: String = 'assets/images/StationResized.png';

  constructor() { }

  ngOnInit() {
  }

}
