import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'home', loadChildren: () => import('./pages/home/home.module')
      .then(p => p.HomeModule),
    },
    {
      path: 'solicitar-emprestimo', loadChildren: () => import('./pages/solicitar-emprestimo/solicitar-emprestimo.module')
      .then(p => p.SolicitarEmprestimoModule),
    },
    {
      path: 'emprestimo-realizado', loadChildren: () => import('./pages/emprestimo-realizado/emprestimo-realizado.module')
      .then(p => p.EmprestimoRealizadoModule),
    },
    {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
    }
    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
