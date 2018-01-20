import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorWrapperComponent } from './anchor-wrapper/anchor-wrapper.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { DataAccessorService } from './data-accessor.service';
import { LocalizationService } from './localiztion.service';
import { WorkSpaceManagerService } from './work-space-manager.service';
import { AuthenticationService } from './authentication.service';
import { LocalizationPipe } from './locliazation.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DataAccessorService,
    LocalizationService,
    WorkSpaceManagerService,
    AuthenticationService
  ],
  declarations: [AnchorWrapperComponent,
    FlipCardComponent,
    SocialButtonsComponent,
    LocalizationPipe],
  exports: [AnchorWrapperComponent,
    FlipCardComponent,
    SocialButtonsComponent, LocalizationPipe]
})
export class CoreModule { }
