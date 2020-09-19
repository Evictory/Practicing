import { Component } from "@angular/core";

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent {
  url = 'https://horoscopodia.virgula.com.br/wp-content/uploads/2019/08/manha_sagrada-620x420.jpeg';
  description: 'Morning show';
}
