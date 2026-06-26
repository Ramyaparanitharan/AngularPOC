import { Component, OnInit, signal } from '@angular/core';
import { Connectservice } from '../services/connectservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apiconnect',
  imports: [ CommonModule ],
  templateUrl: './apiconnect.html',
  styleUrl: './apiconnect.scss',
})
export class Apiconnect implements OnInit {

  meals = signal<any>(null);

  constructor(private connectservice: Connectservice) {}

  ngOnInit(): void {

    this.connectservice.loadDetails().subscribe({
      next: (response) => {
        console.log("API Response:", response);
        this.meals.set(response);
      },
      error: (err) => {
        console.error("Error:", err);
      }
    });

  }
}