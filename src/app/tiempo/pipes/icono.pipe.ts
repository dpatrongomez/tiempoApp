import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icono',
})
export class IconoPipe implements PipeTransform {
  transform(valor: string): string {
    if (valor === '11') {
      return 'assets/weather-icons/clear-day.svg';
    }
    if (valor === '11n') {
      return 'assets/weather-icons/clear-night.svg';
    }
    if (valor === '43n') {
      return 'assets/weather-icons/partly-cloudy-night-drizzle.svg';
    }
    if (valor === '43') {
      return 'assets/weather-icons/partly-cloudy-day-drizzle.svg';
    }
    if (['12', '17'].includes(valor)) {
      return 'assets/weather-icons/partly-cloudy-day.svg';
    }
    if (['12n', '17n'].includes(valor)) {
      return 'assets/weather-icons/partly-cloudy-night.svg';
    }
    if (['15n', '15'].includes(valor)) {
      return 'assets/weather-icons/overcast.svg';
    }
    if (['81', '82'].includes(valor)) {
      return 'assets/weather-icons/partly-cloudy-day-fog.svg';
    }
    if (['81n', '82n'].includes(valor)) {
      return 'assets/weather-icons/partly-cloudy-night-fog.svg';
    }
    if (['16', '16n', '14', '14n'].includes(valor)) {
      return 'assets/weather-icons/cloudy.svg';
    }
    if (['26', '26n', '25', '25n', '46', '46n'].includes(valor)) {
      return 'assets/weather-icons/drizzle.svg';
    }
    if (['54', '54n', '64', '64n'].includes(valor)) {
      return 'assets/weather-icons/thunderstorms-rain.svg';
    }
    return 'assets/weather-icons/not-available.svg';
  }
}
