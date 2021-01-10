import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellOperatorComponent } from './pages/well-operator/well-operator.component';
import { RegulatorComponent } from './pages/regulator/regulator.component';
import { WoDashboardComponent } from './pages/well-operator/wo-dashboard/wo-dashboard.component';
import { WoNewProjectComponent } from './pages/well-operator/wo-new-project/wo-new-project.component';
import { WoUnapprovedProjectComponent } from './pages/well-operator/wo-unapproved-project/wo-unapproved-project.component';
import { WoPendingProjectComponent } from './pages/well-operator/wo-pending-project/wo-pending-project.component';
import { WoCreateWellComponent } from './pages/well-operator/wo-create-well/wo-create-well.component';
import { WoMyWellsComponent } from './pages/well-operator/wo-my-wells/wo-my-wells.component';
import { RegDashboardComponent } from './pages/regulator/reg-dashboard/reg-dashboard.component';
import { RegUicPendingProjectsComponent } from './pages/regulator/reg-uic-pending-projects/reg-uic-pending-projects.component';
import { RegUicProjectReviewComponent } from './pages/regulator/reg-uic-project-review/reg-uic-project-review.component';
import { AddRmWellsTableComponent } from './widgets/add-rm-wells-table/add-rm-wells-table.component';
import { OverviewWellsTableComponent } from './widgets/overview-wells-table/overview-wells-table.component';
import { OverviewWellNameListComponent } from './widgets/overview-well-name-list/overview-well-name-list.component';
import { UicProjectTableComponent } from './widgets/uic-project-table/uic-project-table.component';
import { FeaturesComponent } from './features.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    WellOperatorComponent, 
    RegulatorComponent, 
    WoDashboardComponent, 
    WoNewProjectComponent, 
    WoUnapprovedProjectComponent, 
    WoPendingProjectComponent, 
    WoCreateWellComponent, 
    WoMyWellsComponent, 
    RegDashboardComponent, 
    RegUicPendingProjectsComponent, 
    RegUicProjectReviewComponent, 
    AddRmWellsTableComponent, 
    OverviewWellsTableComponent, 
    OverviewWellNameListComponent, 
    UicProjectTableComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    WellOperatorComponent, 
    RegulatorComponent, 
    WoDashboardComponent, 
    WoNewProjectComponent, 
    WoUnapprovedProjectComponent, 
    WoPendingProjectComponent, 
    WoCreateWellComponent, 
    WoMyWellsComponent, 
    RegDashboardComponent, 
    RegUicPendingProjectsComponent, 
    RegUicProjectReviewComponent, 
    AddRmWellsTableComponent, 
    OverviewWellsTableComponent, 
    OverviewWellNameListComponent, 
    UicProjectTableComponent,
    FeaturesComponent
  ]
})
export class FeaturesModule { }
