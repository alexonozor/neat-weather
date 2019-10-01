import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.components.html',
  styleUrls: ['./errors.components.scss']
})
export class ErrorsComponent implements OnInit {
  routeParams;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeParams = this.activatedRoute.snapshot.queryParams;
  }
}
