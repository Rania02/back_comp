import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {ApiserviceService} from '../apiservice.service'
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
@ViewChild('content',{static:false}) el!:ElementRef;
  constructor(private service:ApiserviceService) { }
  readData:any;
  searchText:any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData=res.data;
    });
  }
  deleteID(id_comp:any)
  {
    console.log(id_comp,'deleteid==>');
    this.service.deleteData(id_comp).subscribe((res)=>{
      console.log(res,'deleteres==>');

    });
  }
  makePDF(){
    let pdf=new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("demo.pdf");
      }
    });
    
  }

}
