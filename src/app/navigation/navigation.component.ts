import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


  toHome() {
    document.getElementById('masthead').scrollIntoView({behavior: 'smooth'});
  }

  toPortfolio() {
    document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'});
  }

  toAboutMe() {
    document.getElementById('about').scrollIntoView({behavior: 'smooth'});
  }

  toContact() {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
  }

}
