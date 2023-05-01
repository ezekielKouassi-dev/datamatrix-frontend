import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-matrix',
  templateUrl: './app.component.html'
})
export class DataMatrixComponent {
  imageData!: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/datamatrix/image', { responseType: 'arraybuffer' })
      .subscribe(response => {
        const bytes = new Uint8Array(response);
        const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
        this.imageData = 'data:image/png;base64,' + btoa(binary);
      });
  }
}
