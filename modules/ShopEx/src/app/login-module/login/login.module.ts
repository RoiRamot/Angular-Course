import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './login-view/login-view.component';
import { AuthenticationService } from '../../core/authentication.service';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [LoginViewComponent],
  exports: [LoginViewComponent]
})
export class LoginModule { }
