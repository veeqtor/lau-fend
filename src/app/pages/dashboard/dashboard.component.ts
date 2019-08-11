import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lau-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  isSidebarCollapsed = false;
  isMobileNavCollapsed = false;

  ngOnInit(): void {
  }

  toggleMobileNav(): void {
    this.isMobileNavCollapsed = !this.isMobileNavCollapsed;
  }

  toggleMobileSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.isMobileNavCollapsed = this.isMobileNavCollapsed ? false : this.isMobileNavCollapsed;
  }
}
