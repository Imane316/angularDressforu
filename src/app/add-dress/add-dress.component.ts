import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { NgForm } from '@angular/forms';
import { DressService } from '../services/dress.service';

@Component({
  selector: 'app-add-dress',
  templateUrl: './add-dress.component.html',
  styleUrls: ['./add-dress.component.css']
})
export class AddDressComponent {
  file!: File;


  message: string = '';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private dressService: DressService)
  {
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0]; 
  }


  onSubmit(form:NgForm) {
    if (form.valid){
    console.log(form.value)

    }
    var data:any = {};
    Object.keys(form.value).forEach(key => {
      data[key]= form.value[key];
    });
    data['picture']=this.file;
    console.log(data['picture']);
    this.dressService.addDress(data).subscribe((data: any) => {
      console.log(data);
      //this.router.navigate(['/other-page']);
    });
  }
}