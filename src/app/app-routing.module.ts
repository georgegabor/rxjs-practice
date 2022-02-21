import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './modules/dashboard/dashboard.component'
import { FormComponent } from './modules/form/form.component'
import { Form2Component } from './modules/form2/form2.component'
import { Form3Component } from './modules/form3/form3.component'
import { NavComponent } from './modules/nav/nav.component'
import { TableComponent } from './modules/table/table.component'

const routes: Routes = [
  { path: '', redirectTo: '/nav', pathMatch: 'full' },
  {
    path: 'nav',
    component: NavComponent,
    children: [
      { path: 'table', component: TableComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'form', component: FormComponent },
      { path: 'form2', component: Form2Component },
      { path: 'form3', component: Form3Component },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
