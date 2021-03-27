import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  catchphrase: string;
  heroText: string;
  heroButton: string;

  constructor() {
    this.catchphrase = "Experience the world"
    this.heroText = "Whenever you're ready"
    this.heroButton = "Our offers"
  }

  ngOnInit(): void {
  }

}
