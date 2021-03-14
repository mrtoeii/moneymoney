
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgModel, FormsModule} from '@angular/forms';
import {ModalModule} from "ngx-bootstrap/modal";
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {TransactionModule} from "./transation";
import {WelletListComponent} from "../components/bos/wellet/welletList.component";
import {WelletFormComponent} from "../components/bos/wellet/welletForm.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: WelletListComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class WelletRoutingModule
{
}

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        WelletRoutingModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TransactionModule
    ],
    declarations: [
        WelletListComponent,
        WelletFormComponent,
    ],
    providers: [
        NgModel
    ]
})

export class WelletModule
{
}