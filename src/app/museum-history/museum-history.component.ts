import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-museum-history',
  templateUrl: './museum-history.component.html',
  styleUrls: ['./museum-history.component.less']
})
export class MuseumHistoryComponent implements OnInit {
  Caboose: String = 'assets/images/Caboose.jpg';
  Plaque: String = 'assets/images/Plaque.jpg';
  constructor() { }

  ngOnInit() {
  }

}
