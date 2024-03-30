import { UserCardComponent } from './user-card/user-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchCardComponent } from './search-card/search-card.component';
const routes: Routes = [
  { path: "usercard", component: UserCardComponent },
  { path: "", component: UserCardComponent },
  { path: "back", redirectTo: "usercard", pathMatch: "full" },
  { path: "userdetails/:id", component: UserDetailsComponent },
  { path: "searchCard/:id", component: SearchCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
