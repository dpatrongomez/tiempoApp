import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icono'
})
export class IconoPipe implements PipeTransform {

  transform(valor: string): string {
    if (valor === '12' || valor === '17') {
      return 'assets/weather-icons/partly-cloudy-day.svg';
    }
    if (valor === '12n' || valor === '17n') {
      return 'assets/weather-icons/partly-cloudy-night.svg';
    }
    if (valor === '11') {
      return 'assets/weather-icons/clear-day.svg';
    }
    if (valor === '11n') {
      return 'assets/weather-icons/clear-night.svg';
    }
    if (valor === '26' || valor === '46' || valor === '46n') {
      return 'assets/weather-icons/drizzle.svg';
    }
    if (valor === '16' || valor === '16n' || valor === '14') {
      return 'assets/weather-icons/cloudy.svg';
    }
    if(valor === '81') {
      return 'assets/weather-icons/partly-cloudy-day-fog.svg';
    }
    if(valor === '81n') {
      return 'assets/weather-icons/partly-cloudy-night-fog.svg';
    }
    return 'assets/weather-icons/not-available.svg';
  }

}
