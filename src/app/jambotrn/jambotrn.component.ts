import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-jambotrn',
  templateUrl: './jambotrn.component.html',
  styleUrls: ['./jambotrn.component.css']
})
export class JambotrnComponent implements OnInit {
  images : any[]
  isCollapsed : boolean = false

  constructor() { 
    this.isCollapsed = true;
  }

  ngOnInit() {
    
    this.images = [1, 2, 3,4,5].map(() => `https://picsum.photos/1350/500?random&t=${Math.random()}`);
  }

}
