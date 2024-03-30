import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: any = []
  loading: boolean = false;

  constructor(private _ActivatedRoute: ActivatedRoute, private _service :UserServiceService) { 

    let { id } = this._ActivatedRoute.snapshot.params;
    this.userDetails(id);

  }

  ngOnInit(): void {
  }
  userDetails(id: string) {
    this._service.getUserDetails(id).subscribe({
      next: (res:any) => {
        this.user = res.data || [];
        this.loading = false

      }
    })
  }
}
