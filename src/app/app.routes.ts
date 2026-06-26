import { Routes } from '@angular/router';
import { Apiconnect } from '../apiconnect/apiconnect';
import { Reactiveform } from '../reactiveform/reactiveform';

export const routes: Routes = [
    { path:"apiconnect", component: Apiconnect },
    { path : "reactiveform" , component : Reactiveform}
];
