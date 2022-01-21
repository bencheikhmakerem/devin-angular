import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devin',
  templateUrl: './devin.component.html',
  styleUrls: ['./devin.component.css']
})
export class DevinComponent implements OnInit {

  NumSaisi = 0 ;
  essai = 0;
  message = "";
  data: any;
  
  
  constructor(public http : HttpClient ) { }

  ngOnInit()  {
    return this.http.get('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new')
    .subscribe((response => {
    this.data = response;
    console.log(this.data);
}));
  }
  
  clicButton()
  {
    this.essai++;
    
    
      if(this.NumSaisi<this.data)
      {
      //console.log("Try a bigger number");
      this.message = "Try a bigger number";
      //this.essai +=1;
      }
      else if(this.NumSaisi>this.data)
      {
        //console.log("Try a smaller number");
        this.message = "Try a smaller number";
        //this.essai+=1;
      } 
      else if(this.NumSaisi == this.data)
      {
        //console.log("Well done !");
        this.message = "well done!!  vous avez gagné après " +this.essai + " essais";
      }
     
     
   }




}

