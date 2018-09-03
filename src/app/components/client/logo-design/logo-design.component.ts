import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LogoDesignService } from './logo-design.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { auditTime } from "rxjs/operators";
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-logo-design',
  templateUrl: './logo-design.component.html',
  styleUrls: ['./logo-design.component.css']
})
export class LogoDesignComponent implements OnInit {

  isLinear = false;
  logoForm: FormGroup;
  logoPackageForm: FormGroup;
  logoPack: string = "";

  @ViewChild('logoTitle') logoTitle: ElementRef;
  @ViewChild('logoCaption') logoCaption: ElementRef;
  @ViewChild('logoDescription') logoDescription: ElementRef;

  logoPackages = [
    { value: 'pack1', viewValue: 'Logo pack 1 - You will get to choose from 5 different logos developed by 5 different experienced designers.' },
    { value: 'pack2', viewValue: 'Logo pack 2 - You will get to choose from 8 different logos developed by 8 different experienced designers.' },
    { value: 'pack3', viewValue: 'Logo pack 3- You will get to choose from 8 different logos developed by 12 different experienced designers.' },
    { value: 'pack4', viewValue: 'Logo pack 4- You will get to choose from 20 different logos developed by 20 different experienced designers.' },
  ];

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Descripe your logo...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

  private alive: boolean;

  constructor(private _logoDesignService: LogoDesignService, private fb: FormBuilder) { }

  ngOnInit() {

    this.logoForm = this.fb.group({
      logoTitle: ['', Validators.required],
      logoCaption: '',
      logoDescription: '',
    });
    this.logoPackageForm = this.fb.group({
      logoPackSelected: ['', Validators.required]
    });


    if (localStorage.getItem("logoFormDetails") === null) {
      this.logoForm.setValue({
        logoTitle: JSON.parse(localStorage.getItem('logoFormDetails')).logoTitle || '',
        logoCaption: JSON.parse(localStorage.getItem('logoFormDetails')).logoCaption || '',
        logoDescription: JSON.parse(localStorage.getItem('logoFormDetails')).logoDescription || ''
      });
    }

    this.logoForm.valueChanges.pipe(auditTime(5000)).subscribe(value => {
      if (value.logoTitle.length > 3 || value.logoCaption.length > 5 || value.logoDescription.length > 10)
        localStorage.setItem('logoFormDetails', JSON.stringify(value));
    })
  }

  onLogoPackSelected(e) {
    console.log('logo pack selected ', e);
    this.logoPack = e;
  }

  logoFormSubmit() {
    console.log(this.logoForm.value);
  }

  logoPackageFormSubmit() {
    console.log(this.logoPackageForm.value);
  }

  saveLogoInfo(form) {
    console.log('title: ', form.value.logoTitle);
    console.log('caption: ', form.value.logoCaption);
    console.log('desc: ', form.value.logoDescription);
    this._logoDesignService.logoFormSave(form.value).subscribe(formSaved => {
      console.log('form saved ', formSaved)
    })
  }

}
