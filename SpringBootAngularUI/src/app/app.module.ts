import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { UsersFormComponent } from './component/users-form/users-form.component';
import { UsersCollectionComponent } from './component/users-collection/users-collection.component';
import { MessageService } from 'primeng/api';
import { MotherboardCollectionComponent } from './component/motherboard-collection/motherboard-collection.component';
import { AvailabilityCodesService } from './service/availabilityCodes.service';
import { BearingCodesService } from './service/bearingCodes.service';
import { ChipsetCodesService } from './service/chipsetCodes.service';
import { ColorCodesService } from './service/colorCodes.service';
import { CpuSocketCodesService } from './service/cpuSocketCodes.service';
import { EccRegisteredCodesService } from './service/eccRegisteredCodes.service';
import { EfficiencyRatingCodesService } from './service/efficiencyRatingCodes.service';
import { ExternalPowerCodesService } from './service/externalPowerCodes.service';
import { FormFactorCodesService } from './service/formFactorCodes.service';
import { FrameSyncCodesService } from './service/frameSyncCodes.service';
import { FrontPanelUsbCodesService } from './service/frontPanelUsbCodes.service';
import { IntegratedGraphicsCodesService } from './service/integratedGraphicsCodes.service';
import { InterfaceCodesService } from './service/interfaceCodes.service';
import { ManufacturerCodesService } from './service/manufacturerCodes.service';
import { MemoryTypeCodesService } from './service/memoryTypeCodes.service';
import { MerchantCodesService } from './service/merchantCodes.service';
import { MicroarchitectureCodesService } from './service/microarchitectureCodes.service';
import { ModularCodesService } from './service/modularCodes.service';
import { MotherboardService } from './service/motherboard.service';
import { MotherboardFormFactorCodesService } from './service/motherboardFormFactorCodes.service';
import { PackagingCodesService } from './service/packagingCodes.service';
import { SeriesCodesService } from './service/seriesCodes.service';
import { SidePanelWindowCodesService } from './service/sidePanelWindowCodes.service';
import { SliCrossfireCodesService } from './service/sliCrossfireCodes.service';
import { SocketCodesService } from './service/socketCodes.service';
import { TypeCodesService } from './service/typeCodes.service';
import { UsersService } from './service/users.service';
import { MemoryService } from './service/memory.service';
import { MemoryCollectionComponent } from './component/memory-collection/memory-collection.component';
import { CasesService } from './service/cases.service';
import { CoreFamilyCodesService } from './service/coreFamilyCodes.service';
import { CpuService } from './service/cpu.service';
import { CpuCoolerService } from './service/cpuCooler.service';
import { PowerSupplyService } from './service/powerSupply.service';
import { StoragesService } from './service/storages.service';
import { VideoCardService } from './service/videoCard.service';
import { CpuCollectionComponent } from './component/cpu-collection/cpu-collection.component';
import { CpuCoolerCollectionComponent } from './component/cpuCooler-collection/cpuCooler-collection.component';
import { CasesCollectionComponent } from './component/cases-collection/cases-collection.component';
import { PowerSupplyCollectionComponent } from './component/powerSupply-collection/powerSupply-collection.component';
import { StoragesCollectionComponent } from './component/storages-collection/storages-collection.component';
import { VideoCardCollectionComponent } from './component/videoCard-collection/videoCard-collection.component';
import { NonEmptyUnitPipe } from './pipe/nonEmptyUnit.pipe';
import { UsersLoginFormComponent } from './component/users-login-form/users-login-form.component';
import { ComponentListService } from './service/componentList.service';
import { ComputerService } from './service/computer.service';
import { ComponentListCollectionComponent } from './component/componentList-collection/componentList-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersFormComponent,
    UsersLoginFormComponent,
    UsersCollectionComponent,
    MotherboardCollectionComponent,
    MemoryCollectionComponent,
    CpuCollectionComponent,
    CpuCoolerCollectionComponent,
    CasesCollectionComponent,
    PowerSupplyCollectionComponent,
    StoragesCollectionComponent,
    VideoCardCollectionComponent,
    ComponentListCollectionComponent,
    NonEmptyUnitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    CheckboxModule,
    OverlayPanelModule
  ],
  providers: [
    AvailabilityCodesService,
    BearingCodesService,
    ChipsetCodesService,
    ColorCodesService,
    CpuSocketCodesService,
    EccRegisteredCodesService,
    EfficiencyRatingCodesService,
    ExternalPowerCodesService,
    FormFactorCodesService,
    FrameSyncCodesService,
    FrontPanelUsbCodesService,
    IntegratedGraphicsCodesService,
    InterfaceCodesService,
    ManufacturerCodesService,
    MemoryTypeCodesService,
    MerchantCodesService,
    MicroarchitectureCodesService,
    ModularCodesService,
    MotherboardService,
    MotherboardFormFactorCodesService,
    PackagingCodesService,
    SeriesCodesService,
    SidePanelWindowCodesService,
    SliCrossfireCodesService,
    SocketCodesService,
    TypeCodesService,
    UsersService,
    MessageService,
    MemoryService,
    CasesService,
    CoreFamilyCodesService,
    CpuService,
    CpuCoolerService,
    PowerSupplyService,
    StoragesService,
    VideoCardService,
    ComponentListService,
    ComputerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
