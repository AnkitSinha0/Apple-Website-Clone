import { Component } from '@angular/core';
import { Navbar } from '../core/navbar/navbar';
import { NgIf } from '@angular/common';
import { Footer } from '../core/footer/footer';
@Component({
  selector: 'app-applepay',
  standalone: true,
  imports: [Navbar,NgIf,Footer],
  templateUrl: './applepay.html',
  styleUrls: ['./applepay.css']
})
export class Applepay {
  loading = true;

  constructor() {

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
