import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Content } from '../content/content';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  imports: [Header, Sidebar, Content, Footer],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {}
