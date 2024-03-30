import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  user: any = []
  loading: boolean = false;

  constructor(private _service: UserServiceService, private _router: Router) {

  }

  ngOnInit(): void {
  }
  getUser(event: Event) {

    setTimeout(() => {
      const target = event.target as HTMLInputElement;
      const id = target.value;
      this._service.searchUser(id).subscribe({
        next: (res: any) => {
          this.user = res;
          this._router.navigate(['/searchCard', id]);
          this.loading = false

        }
      });
    }, 2000);
  }

}
