import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { GreetingService } from '../greeting.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private router:Router,public greetingService:GreetingService){}
ngOnInit(){
  // this.greetingService.getLocalData().subscribe(data =>{
    
  //     console.log("local data");
  //     console.log("data");

  //   });
 
}
GotoDetailPage(){
this.router.navigate(['/detail']);
}
}
