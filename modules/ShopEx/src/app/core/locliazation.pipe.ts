import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LocalizationService } from './localiztion.service';

@Pipe({
  name: 'localization',
pure: false
})
export class LocalizationPipe implements PipeTransform {
  constructor(private localizationService: LocalizationService) {}

  transform(value: string, args?: any): string {
    return this.localizationService.GetValue(value);
  }

}
