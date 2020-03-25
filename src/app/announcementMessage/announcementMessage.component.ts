import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ng-uikit-pro-standard';

// Property declared by Google Tag Manager
declare global {
    interface Window {
        dataLayer: any;
    }
}

@Component({
    selector: 'app-announcementMessage',
    templateUrl: './announcementMessage.component.html',
    styleUrls: ['./announcementMessage.component.sass'],

})
export class AnnouncementMessageComponent {

    @ViewChild('announcementModal') public announcementModal: ModalDirective;

    constructor(
        private route: ActivatedRoute,
        private router: Router,

    ) { }





    public show() {
        this.announcementModal.show();
    }

    hide() {
        this.announcementModal.hide();
    }





}