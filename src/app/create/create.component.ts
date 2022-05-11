import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ApiserviceService} from'../apiservice.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }
  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
 this.getparamid=this.router.snapshot.paramMap.get('id_comp');
 if(this.getparamid)
{this.service.getSingleData(this.getparamid).subscribe((res)=>{
  console.log(res,'res==>');
  this.complaintForm.patchValue({
    dater:res.data[0].dater,
    description:res.data[0].description,
    status:res.data[0].status
  });
   });
  } 
  }
  complaintForm=new FormGroup({
    'dater':new FormControl('',Validators.required),
    'description':new FormControl('',Validators.required),
    'status':new FormControl('',Validators.required)
  });
  //createnewcomplaint
  complaintSubmit(){
    if(this.complaintForm.valid)
    {

      console.log(this.complaintForm.value)
      this.service.createData2(this.complaintForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.complaintForm.reset();
       
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
  complaintUpdate()
  {
  if (this.complaintForm.valid)
  {
    this.service.updateData(this.complaintForm.value,this.getparamid).subscribe((res)=>{
this.successmsg=res.message;
    });
  }else 
  {
    this.errormsg='all field is required';
  }
  }
}
