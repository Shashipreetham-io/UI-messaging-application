import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName,  Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  imgSrc:string;
  selectedImage: any;
isSubmitted:boolean=false;


constructor() { }

  ngOnInit(): void {
  // this.resetForm();
  }


formTemplate=new FormGroup({
imageUrl:new FormControl('',Validators.required),
caption:new FormControl('',Validators.required),
})
showImage(event:any){
if(event.target.files && event.target.files[0]){
const reader=new FileReader();
reader.onload=(e:any)=>this.imgSrc=e.target.result;
reader.readAsDataURL(event.target.files[0]);
this.selectedImage=event.target.files[0];
}
else{
  this.imgSrc='/assets/add.png';
  this.selectedImage=null;
}
}

get formControls(){
  return this.formTemplate['controls'];
}
onSubmit(formvalue){
  this.isSubmitted=true;
}
  

}


