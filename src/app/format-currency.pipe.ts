import { Pipe, PipeTransform, style } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: any, locale= 'pt-br'): any {
    return new Intl.NumberFormat('locale').format(value);
  }

}
