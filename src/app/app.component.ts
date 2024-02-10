import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'GuiaCalidad';

  ngOnInit(): void {
    initFlowbite();
  }
}
