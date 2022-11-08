import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { UserComponent } from './components/user/user.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'customers',
    component: CustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
