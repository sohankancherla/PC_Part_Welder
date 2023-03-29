import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'nonEmptyUnit' })
export class NonEmptyUnitPipe implements PipeTransform {
    transform(input: number, unit: string): string {
        if (input == null || input == undefined) {
            return "";
        }
        return input + " " + unit;
    }
}