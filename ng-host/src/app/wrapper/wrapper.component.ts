import { AfterContentInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { registry } from '../registry';

@Component({
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {

  @ViewChild('vc', {read: ElementRef, static: true})
  vc: ElementRef | undefined;

  constructor(private route: ActivatedRoute) { }

  ngAfterContentInit(): void {

    const elementName = this.route.snapshot.data['elementName'];
    const importName = this.route.snapshot.data['importName'];
    //@ts-ignore
    const importFn = registry[importName];
    importFn()
              //@ts-ignore
      .then(_ => console.debug(`element ${elementName} loaded!`))
          //@ts-ignore
      .catch(err => console.error(`error loading ${elementName}:`, err));

    const element = document.createElement(elementName);
        //@ts-ignore
    this.vc.nativeElement.appendChild(element);

  }

}
