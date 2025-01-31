import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { platformBrowser } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [ RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lonny-front';
}
