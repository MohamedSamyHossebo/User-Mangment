import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  users: any = [];
  myObject: any = [];
  loading: boolean = false;

  constructor(private _service: UserServiceService) {


  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this._service.getUsers().subscribe({
      next: (res: any) => {
        this.users = res.data || [];
        this.loading = false

      }
    });
  }

}
