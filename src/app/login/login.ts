import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'login-page');
    this.renderer.addClass(document.body, 'bg-body-secondary');
    this.renderer.addClass(document.body, 'app-loaded');
  }
}
