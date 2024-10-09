import { Component, Input } from '@angular/core';
import { AnnualData } from '../calc.model';

@Component({
  selector: 'app-showing',
  standalone: true,
  imports: [],
  templateUrl: './showing.component.html',
  styleUrl: './showing.component.css',
})
export class ShowingComponent {
  @Input({ required: true }) data!: AnnualData;
  ngOnInit() {
    console.log('Received data:', this.data);
  }
}
