import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ElementRef, ViewChild } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  private module: any;
  ngVersion = require('../../package.json').dependencies['@angular/core'];
  @ViewChild('container', { static: true }) containerRef!: ElementRef;

  title = 'host';

  async ngOnInit() {
    this.module = await loadRemoteModule({
      remoteEntry: 'http://localhost:3000/moduleEntry.js',
      remoteName: 'Remote',
      exposedModule: './web',
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const container = this.containerRef.nativeElement;
      this.module.renderComponent(container, {title:"Sergei"});
    }, 2000);
  }
}
