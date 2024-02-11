import { Component, OnInit } from '@angular/core';
import { IPortfolio } from 'src/models/IPortfolio';
import { portfolioData} from 'src/models/constants';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  {
  data : IPortfolio = portfolioData
}
