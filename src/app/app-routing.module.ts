import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDocComponent } from './create-doc/create-doc.component';
import { DeleteDocComponent } from './delete-doc/delete-doc.component';
import { RecentDocComponent } from './recent-doc/recent-doc.component';
import { UploadDocComponent } from './upload-doc/upload-doc.component';

const routes: Routes = [
  {path:'create-doc',component:CreateDocComponent},
  {path:'upload-doc',component:UploadDocComponent},
  {path:'recent-doc',component:RecentDocComponent},
  {path:'delete-doc',component:DeleteDocComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
