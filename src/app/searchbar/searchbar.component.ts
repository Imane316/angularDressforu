import { Component , OnInit } from '@angular/core';
import { DressService } from '../services/dress.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchTerm: string = '';
  dress: any;
  message : string='';

  constructor(   private dressService: DressService, private router : Router) { }

  

  search(): void {
    this.dressService.getDressByName(this.searchTerm).subscribe(
        (response) => {

          this.dress = response;
          console.log(this.dress);
          if (this.dress) {
            this.message = '';
          } else {
            this.message = "Essaye un autre nom";
          }
      }
      
  
      );
  }
 

  
}



 
  