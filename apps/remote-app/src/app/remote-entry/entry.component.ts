import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'workspace-remote-app-entry',
  template: `<h1>ENTRY REMOTE COMPONENT LOADED !!!* </h1>`,
})
export class RemoteEntryComponent implements OnInit {

  ngOnInit(): void {
      console.log('ENTRY REMOTE COMPONENT LOADED !!!!!!!!!!!!!!!!!!!!!!!')
  }
}
