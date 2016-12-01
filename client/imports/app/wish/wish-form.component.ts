import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';

import { Wishes } from '../../../../both/collections/wishes.collection';
import template from './wish-form.component.html';

@Component({
    selector: 'wish-form',
    template
})

export class WishFormComponent implements OnInit {
    addForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: [],
            store: ['', Validators.required]
        });
    }

    addWish(): void {

        if (!Meteor.userId()) {
            alert("Please log in");
            return;
        }


        if (this.addForm.valid) {
            Wishes.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));
            this.addForm.reset();
        }
        else{
          alert("Form invalid");
        }
    }

}
