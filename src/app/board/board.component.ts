import { Component, OnInit } from '@angular/core';
import { Board } from './board';
import { CONTACTS_MOCK } from '../../data/contacts-mock';
import { BoardService } from './board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {
  boards: Board[];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.getBoard();
  }

  private getBoard(): void {
    this.boardService.getBoardMembers().subscribe(boards => this.boards = boards);
  }
}
