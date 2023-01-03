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
  },
  {
    path: 'mp3',
    loadChildren: () => import('./mp3-cutter/mp3-cutter.module').then((m) => m.Mp3CutterModule)
  },
  {
    path: 'record-media',
    loadChildren: () => import('./record-media/record-media.module').then((m) => m.RecordMediaModule)
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
