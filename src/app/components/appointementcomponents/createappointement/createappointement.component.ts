import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import {ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-createappointement',
  templateUrl: './createappointement.component.html',
  styleUrls: ['./createappointement.component.css']
})
export class CreateappointementComponent implements OnInit {

  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }
  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('id_app');
 if(this.getparamid)
{this.service.getSingleData2(this.getparamid).subscribe((res)=>{
  console.log(res,'res==>');
  this.appointmentForm.patchValue({
    date_app:res.data[0].date_app,
    hour:res.data[0].hour,
  });
   });
  }

}
appointmentForm=new FormGroup({
  'date_app':new FormControl('',Validators.required),
  'hour':new FormControl('',Validators.required),
});


 //createnewcomplaint
 appSubmit(){
  if(this.appointmentForm.valid)
  {

    console.log(this.appointmentForm.value)
    this.service.createData2(this.appointmentForm.value).subscribe((res)=>{
      console.log(res,'res==>');
      this.appointmentForm.reset();
     
    })
    

    Swal.fire(
      'Well Done!',
      'Complaint  is well created!',
      'success'
    )

  }else{

    Swal.fire({
      title: 'Empty fiels!',
      text: 'Fill them up to create ',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
    
    this.errormsg='All fields are required!';
  

  }
 
}
appUpdate()
  {
  if (this.appointmentForm.valid)
  {
    this.service.updateData2(this.appointmentForm.value,this.getparamid).subscribe((res)=>{
this.successmsg=res.message;
    });
  }else 
  {
    this.errormsg='all field is required';
  }
  }
}

