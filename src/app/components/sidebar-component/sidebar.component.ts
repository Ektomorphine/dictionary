import { Component, ElementRef } from '@angular/core';

import { HeaderComponent } from './../header-component/header.component';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public show = true;

  public onToggle() {
    const el = document.getElementById('toggle');
    this.show ? el.style.left = '0px' : el.style.left = '-15%';
    this.show = !this.show;
  }
}
