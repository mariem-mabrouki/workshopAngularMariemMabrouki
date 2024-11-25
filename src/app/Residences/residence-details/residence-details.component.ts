import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css'],
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;
  // ...other properties...

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));
    // Fetch the residence details using residenceId
    // ...existing code...
  }

  // ...existing methods...
}
