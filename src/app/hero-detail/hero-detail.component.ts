import { Component, Input } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe} from "@angular/common";
import { Hero } from '../hero';
@Component({
  standalone: true,
  selector: 'app-hero-detail',
  imports: [
        FormsModule,
        NgIf,
        UpperCasePipe
    ],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
    @Input() hero?: Hero;
}
