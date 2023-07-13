import { Component } from '@angular/core';
import { QuickStatblock } from 'src/app/models/quickstatblock';
import { QuickStatsService } from 'src/app/services/quick-stats.service';

@Component({
  selector: 'app-quickstats',
  templateUrl: './quickstats.component.html',
  styleUrls: ['./quickstats.component.css']
})
export class QuickstatsComponent {

  constructor(private quickStatService:QuickStatsService){}

stats:QuickStatblock = {
  CR: 0,
  HP: 0,
  AC: 0,
  DefCR: 0,
  DmgRnd: 0,
  Atk: 0,
  OffCR: 0,
};
beeped:number = 0;

process(): void{
  this.quickStatService.process(this.stats)
    .subscribe(returned => this.stats = returned);
}

beep(): void{
  this.quickStatService.beep(this.beeped)
    .subscribe(boop => this.beeped = boop);
}

}
