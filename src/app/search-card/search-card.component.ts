import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {
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
