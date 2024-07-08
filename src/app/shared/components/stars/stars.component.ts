import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sh-stars',
  standalone: true,
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css',
})
export class StarsComponent implements OnInit {
  @Input() stars: 0 | 1 | 2 | 3 | 4 | 5 = 0;

  starsList!: boolean[];

  ngOnInit() {
    this.starsList = Array.from({ length: 5 }).map((_, i) => {
      console.log(i, this.stars, i < this.stars);
      return i < this.stars;
    });
  }
}
