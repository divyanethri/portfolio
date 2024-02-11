import { Component, OnInit } from '@angular/core';
import { IPortfolio } from 'src/models/IPortfolio';
import { portfolioData } from 'src/models/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
 last: string = portfolioData.personalInfo.languages[portfolioData.personalInfo.languages.length - 1];
  data : IPortfolio =  portfolioData;
  calculateRotation(percentage: string): string {
    const rotation = (parseInt(percentage) / 100) * 360;
    return `${rotation}deg`;
  }
  
}
