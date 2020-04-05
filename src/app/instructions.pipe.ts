import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'instructions'
})
export class InstructionsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('value', value);
    const newVal = value.split('.').join('.<br/><br />');
    console.log('new val', newVal);
    return newVal;
  }

}
