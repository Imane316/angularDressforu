import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DressService } from '../services/dress.service';

@Component({
  selector: 'app-dressdetail',
  templateUrl: './dressdetail.component.html',
  styleUrls: ['./dressdetail.component.css']
})
export class DressdetailComponent implements OnInit {
  dress: any;

  constructor(
    private route: ActivatedRoute,
    private dressService: DressService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('iddress');
    if (id) {
      this.getDressById(id);
    }
  }

  getDressById(id: string): void {
    this.dressService.getDressById(id)
      .subscribe(response => {
        this.dress = response;
      });
  }
}