import {Component, Input, OnInit} from '@angular/core';
import {Paslon} from "../../models/paslon.model";

@Component({
  selector: 'app-paslon',
  templateUrl: './paslon.component.html',
  styleUrls: ['./paslon.component.css']
})
export class PaslonComponent implements OnInit {
  @Input() paslon!: Paslon

  voteUp(): boolean {
    this.paslon.voteUp()
    return false;
  }

  voteDown(): boolean {
    this.paslon.voteDown()
    return false;
  }

  ngOnInit(): void {
  }
}
