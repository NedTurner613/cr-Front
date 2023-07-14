import { Component } from '@angular/core';
import { QuickStatblock } from 'src/app/models/quickstatblock';
import { QuickStatsService } from 'src/app/services/quick-stats.service';
import { Boop } from 'src/app/models/boop';

@Component({
  selector: 'app-quickstats',
  templateUrl: './quickstats.component.html',
  styleUrls: ['./quickstats.component.css']
})
export class QuickstatsComponent {

  constructor(private quickStatService:QuickStatsService){}

stats:QuickStatblock = {
  // cr: 0,
  hp: 0,
  ac: 0,
  // defCR: 0,
  dmgRnd: 0,
  atk: 0,
  dc: 0,
  atkVsDc: false,
  // offCR: 0,
};
beeped:Boop = {
  forst: 0,
  sklort:0,
  splurt:0,
};

process(): void{
  console.log("PreProcess CR: " + this.stats.cr);
  console.log("PreProcess HP: " + this.stats.hp);
  this.quickStatService.process(this.stats)
    .subscribe(returned => this.stats = returned);

  console.log("PostProcess CR: " + this.stats.cr);
  console.log("PostProcess HP: " + this.stats.hp);
}

beep(): void{
  this.quickStatService.beep(this.beeped)
    .subscribe(boop => this.beeped = boop);
}

}
