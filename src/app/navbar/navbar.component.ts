import { Component } from '@angular/core';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})


export class NavBarComponent {
  pageTitle: string = 'MiniNetflix';

  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;
}
