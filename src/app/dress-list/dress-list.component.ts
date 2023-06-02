import { Component, OnInit } from '@angular/core';
import { DressService } from   '../services/dress.service';

@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.component.html',
  styleUrls: ['./dress-list.component.css']
})
export class DressListComponent implements OnInit {

  dresses: any[] = [];
  
  constructor(private dressService: DressService) { }

  ngOnInit(): void {
    this.getDresses();
  }

  getDresses(): void {
    this.dressService.getDresses()
      .subscribe(response => {
        this.dresses = response;
      });
  }

}

