import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.module').then((m) => m.MailModule)
  },
  {
    path: '',
    loadChildren: () => import('./mail/mail.module').then((m) => m.MailModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
