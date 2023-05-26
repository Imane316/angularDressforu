import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DressService } from '../services/dress.service';

@Component({
  selector: 'app-add-dress',
  templateUrl: './add-dress.component.html',
  styleUrls: ['./add-dress.component.css']
})
export class AddDressComponent {
  dressForm: FormGroup;
  message: string = '';
  imageUrl: string = '';

  constructor(private formBuilder: FormBuilder, private dressService: DressService) {
    this.dressForm = this.formBuilder.group({
      name: '',
      picture: '',
      price: '',
      material: '',
      size: ''
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.dressForm.patchValue({ picture: file });
    this.dressForm.get('picture')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  sendForm() {
    if (this.dressForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('name', this.dressForm.get('name')?.value);
    formData.append('picture', this.dressForm.get('picture')?.value);
    formData.append('price', this.dressForm.get('price')?.value);
    formData.append('material', this.dressForm.get('material')?.value);
    formData.append('size', this.dressForm.get('size')?.value);

    this.dressService.addDress(formData).subscribe(
      (data: any) => {
        console.log(data);
        // Traitez la réponse de l'ajout de la robe si nécessaire
        this.message = 'Dress created successfully!';
      },
      (error: any) => {
        
        console.error(error);
        // Traitez l'erreur de l'ajout de la robe si nécessaire
        this.message = 'Error creating dress';
      }
    );
  }
}
