import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss']
})
export class ZooComponent implements OnInit {

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }
}
