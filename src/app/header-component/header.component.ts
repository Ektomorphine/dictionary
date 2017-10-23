import { Component, ElementRef } from '@angular/core';

import { SidebarComponent} from './../sidebar-component/sidebar.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [SidebarComponent]
})
export class HeaderComponent {

  constructor(public sidebar: SidebarComponent) {}

}
