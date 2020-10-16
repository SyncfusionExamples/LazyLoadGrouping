import { Component, OnInit } from '@angular/core';
import { createLazyLoadData, lazyLoadData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public lazyLoadData: object[] = lazyLoadData;

  // Enabled Lazy loading and added initial grouped columns
  public groupSettings: object = { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] };

  ngOnInit(): void {
    // Generated datasource for lazy load grouping
    createLazyLoadData();
  }
}
