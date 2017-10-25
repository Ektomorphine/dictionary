import { Component, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidebarComponent } from './../sidebar-component/sidebar.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public open_sidebar = true;

  constructor(@Inject(DOCUMENT) private _document: Document,
              private _renderer: Renderer2) {}

  public onToggle() {

    if (this.open_sidebar) {
      this._renderer.addClass(this._document.body, 'sidebar-opened');
    } else {
      this._renderer.removeClass(this._document.body, 'sidebar-opened');
    }
    this.open_sidebar = !this.open_sidebar;
  }
}
