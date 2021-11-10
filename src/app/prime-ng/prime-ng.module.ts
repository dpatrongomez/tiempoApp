import { NgModule } from '@angular/core';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import {ProgressBarModule} from 'primeng/progressbar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DropdownModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    ProgressBarModule,
    MessagesModule,
    MessageModule,
    AutoCompleteModule
  ]
})
export class PrimeNgModule { }
