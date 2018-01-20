import { Pipe, PipeTransform } from '@angular/core';
import { LocaliztionService } from './localiztion.service';
import { Subscription } from 'rxjs/Subscription';

@Pipe({
  name: 'locliazation',
pure: false
})
export class LocliazationPipe implements PipeTransform {
  constructor(private localizationService: LocaliztionService) {}

  transform(value: string, args?: any): string {
    return this.localizationService.GetValue(value);
  }

}
