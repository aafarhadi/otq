import { Component, OnInit } from '@angular/core';
import { DasarService } from '../dasar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produks: any;

  constructor(private dasarService: DasarService) { }

  ngOnInit() {
    this.get_produk_terbaru();
  }

  get_produk_terbaru(){
    this.dasarService.hit_api_get('get_produk_terbaru').subscribe(
      (respon) => {
        this.produks = respon['data'];
        console.log('hasilnya adalah');
        console.log(this.produks);
      },
      (error) => console.log(error)
    );
  }

}
