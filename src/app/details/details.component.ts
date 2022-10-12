import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  data: any=
  {id:'',
  code:'',
  empname:'',
  address:'',
  pobox:'',
  phonenumber:'',
  email:'',
  checkbox:''
}

branchDetails: any[] =[]
  
  ngOnInit(): void {
  }
  save()
  {
    console.log("data saved")
    let details=localStorage.getItem("branchDetails")
    if (details)
    {
      this.branchDetails=JSON.parse(details)
      this.branchDetails.push(this.data)
     localStorage.setItem("branchDetails", JSON.stringify(this.branchDetails))


    }else{
      this.branchDetails = [this.data]
      localStorage.setItem("branchDetails", JSON.stringify(this.branchDetails))
    }
    this.resetData()
  }

  resetData(){
    this.data = {
    id:'',
    code:'',
    empname:'',
    address:'',
    pobox:'',
    phonenumber:'',
    email:'',
    checkbox:''
  }
  }

}
