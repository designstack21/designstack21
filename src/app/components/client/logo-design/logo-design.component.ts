import { Component, OnInit } from '@angular/core';
import { LogoDesignService } from './logo-design.service';

@Component({
  selector: 'app-logo-design',
  templateUrl: './logo-design.component.html',
  styleUrls: ['./logo-design.component.css']
})
export class LogoDesignComponent implements OnInit {


  constructor(private _logoDesignService: LogoDesignService) { }

  ngOnInit() {
  }

  progressiveSave(logoTitle: HTMLInputElement) {
    if (logoTitle.value.length > 10) {

      let inDebounce;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => {
          this._logoDesignService.progressiveSave(logoTitle).subscribe((res: any) => {
            console.log('progressiveSave res ', res);
          })
        }, 3000)
      }
    }
  }

  saveLogoInfo(logoTitle: HTMLInputElement, logoCaption: HTMLInputElement) {
    console.log(logoTitle.value);
    console.log(logoCaption.value);
  }

}
