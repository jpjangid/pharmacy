import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isExpanded = true;
  state = 'collapsed';
 
  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

}
