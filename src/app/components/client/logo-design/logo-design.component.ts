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

  logoForm: FormGroup;
  @ViewChild('logoTitle') logoTitle: ElementRef;
  @ViewChild('logoCaption') logoCaption: ElementRef;
  @ViewChild('logoDescription') logoDescription: ElementRef;


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

    this.logoForm.setValue({
      logoTitle: JSON.parse(localStorage.getItem('logoFormDetails')).logoTitle || '',
      logoCaption: JSON.parse(localStorage.getItem('logoFormDetails')).logoCaption || '',
      logoDescription: JSON.parse(localStorage.getItem('logoFormDetails')).logoDescription || ''
    });

    this.logoForm.valueChanges.pipe(auditTime(5000)).subscribe(value => {
      if (value.logoTitle.length > 3 || value.logoCaption.length > 5 || value.logoDescription.length > 10)
        localStorage.setItem('logoFormDetails', JSON.stringify(value));
    })
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
