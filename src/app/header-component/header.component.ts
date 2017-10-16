import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public show = true;

  public onToggle() {
    let el = document.getElementById('toggle');
    this.show ? el.style.left = "-100px" : el.style.left = "0";
    this.show = !this.show;

  }
}
