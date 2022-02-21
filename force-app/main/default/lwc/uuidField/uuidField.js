import { api, LightningElement, wire } from 'lwc';
import HASH_FIELD from '@salesforce/schema/Lead.LeadHash__c';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class UuidField extends LightningElement {
    @api recordId;
    hashField = HASH_FIELD;

    _uuid = '';

    @api
    get uuid() {
        return this._uuid;
    }

    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    closeAction(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    autofill() {
        var field = this.template.querySelector('lightning-input-field');
        console.log(field);
        field.value = this.uuidv4();
    }
}
