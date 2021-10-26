import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudenrollformModel } from '../studenrollform/studenrollform.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-feepayment',
  templateUrl: './feepayment.component.html',
  styleUrls: ['./feepayment.component.css']
})
export class FeepaymentComponent implements OnInit {
  
  constructor(private studentService:StudentService, private router:Router) { }
  studformItem = new StudenrollformModel(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null, null, null);
  images:any
  filename:String
  error:any
  error1:any
   url: any = undefined;
   handler:any = null;
   tokenvalue:boolean=false;
  ngOnInit(): void {
    
    let logedemail = localStorage.getItem("logemail");
    this.studentService.getenrolldata(logedemail)
    .subscribe((data)=>{
  this.studformItem= JSON.parse(JSON.stringify(data));
    })
    this.loadStripe();
    
  }
  submitImage(event:any){
    this.images=event.target.files[0]
    this.filename = this.images.name;
    const reader = new FileReader();
   reader.readAsDataURL(this.images);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }
pay(amount:any){
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51JmASESJeDTHZ17rRTItK4Y1dsv9riiknmvKc3vhCUhbsEL2NT0XR0RGWa95oB4xkTOKlWYLDvbMkXXw2eKFtoiD00pFoLqPLh',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token)
     // localStorage.removeItem('logemail');
    localStorage.setItem("tokanval",token)
   
      alert('Payment sucessfull. Please wait for a mail regarding the enrollment.');      
    }
  });
  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: (amount / 75)*100
  }); 
 
    this.studentService.updatefee(this.studformItem)
    this.tokenvalue=!this.tokenvalue
        localStorage.removeItem('logemail');
        localStorage.removeItem('studnewrole')
}
paid(){
  if(this.tokenvalue){
    this.router.navigate(['/'])
  }
 else{
   alert("Please pay the fees")
 }
}

loadStripe() {
     
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = () => {
      this.handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51JmASESJeDTHZ17rRTItK4Y1dsv9riiknmvKc3vhCUhbsEL2NT0XR0RGWa95oB4xkTOKlWYLDvbMkXXw2eKFtoiD00pFoLqPLh',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Payment Success!!');
        }
      });
    }
     
    window.document.body.appendChild(s);
  }
}

}
