import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  checked: boolean = true;
  constructor(public activeRoute: ActivatedRoute) {}
  ngOnInit(): void {
    console.log('sssss', this.activeRoute);
  }
}
