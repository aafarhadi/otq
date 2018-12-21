import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DasarService } from '../dasar.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-detailproduk',
  templateUrl: './detailproduk.component.html',
  styleUrls: ['./detailproduk.component.css']
})
export class DetailprodukComponent implements OnInit {
  produk_detail : Observable<any> = null;


  constructor(private route: ActivatedRoute,  private dasarService:DasarService) { }

  ngOnInit() {
    let permalink = this.route.snapshot.paramMap.get('permalink');
    this.get_detail_produk(permalink);
    //console.log(permalink);
  }

  get_detail_produk(permalink){
    this.dasarService.hit_api_get('get_detail_produk?nama='+permalink).subscribe(
      (respon) => {
        this.produk_detail = respon['data'][0];
        console.log(respon);
        console.log(this.produk_detail);
      },
      (error) => console.log(error)
    );
  }



}
