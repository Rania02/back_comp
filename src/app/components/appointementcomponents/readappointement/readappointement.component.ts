import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-readappointement',
  templateUrl: './readappointement.component.html',
  styleUrls: ['./readappointement.component.css']
})
export class ReadappointementComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
  readData2:any;

  ngOnInit(): void {
    this.service.getAllData2().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData2=res.data;
    });
  }
  deleteID2(id_app:any)
  {
    console.log(id_app,'deleteid==>');
    this.service.deleteData2(id_app).subscribe((res)=>{
      console.log(res,'deleteres==>');

    });
  }

}
