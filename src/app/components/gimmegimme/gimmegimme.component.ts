import { Component, Input } from '@angular/core';
import { GimmeMan } from 'src/app/models/gimmeMan';
import { GimmegimmeService } from 'src/app/services/gimmegimme.service';

@Component({
  selector: 'app-gimmegimme',
  templateUrl: './gimmegimme.component.html',
  styleUrls: ['./gimmegimme.component.css']
})
export class GimmegimmeComponent {

  man:GimmeMan = {
    input: 0,
    result: 0
  };


  constructor(private gimmegimmeService:GimmegimmeService){}

  process(): void{
    this.gimmegimmeService.process(this.man)
    .subscribe(gottem => this.man = gottem);
  }
}
