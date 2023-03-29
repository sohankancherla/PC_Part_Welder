import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersFormComponent } from './component/users-form/users-form.component';
import { UsersCollectionComponent } from './component/users-collection/users-collection.component';
import { MotherboardCollectionComponent } from './component/motherboard-collection/motherboard-collection.component';
import { MemoryCollectionComponent } from './component/memory-collection/memory-collection.component';
import { CpuCollectionComponent } from './component/cpu-collection/cpu-collection.component';
import { CpuCoolerCollectionComponent } from './component/cpuCooler-collection/cpuCooler-collection.component';
import { CasesCollectionComponent } from './component/cases-collection/cases-collection.component';
import { PowerSupplyCollectionComponent } from './component/powerSupply-collection/powerSupply-collection.component';
import { StoragesCollectionComponent } from './component/storages-collection/storages-collection.component';
import { VideoCardCollectionComponent } from './component/videoCard-collection/videoCard-collection.component';
import { UsersLoginFormComponent } from './component/users-login-form/users-login-form.component';
import { ComponentListCollectionComponent } from './component/componentList-collection/componentList-collection.component';

const routes: Routes = [
  { path: 'users', component: UsersCollectionComponent },
  { path: 'adduser', component: UsersFormComponent },
  { path: 'loginUser', component: UsersLoginFormComponent },
  { path: 'motherboard', component: MotherboardCollectionComponent },
  { path: 'memory', component: MemoryCollectionComponent },
  { path: 'cpu', component: CpuCollectionComponent },
  { path: 'cpuCooler', component: CpuCoolerCollectionComponent },
  { path: 'cases', component: CasesCollectionComponent },
  { path: 'powerSupply', component: PowerSupplyCollectionComponent },
  { path: 'storages', component: StoragesCollectionComponent },
  { path: 'videoCard', component: VideoCardCollectionComponent },
  { path: 'componentList', component: ComponentListCollectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
