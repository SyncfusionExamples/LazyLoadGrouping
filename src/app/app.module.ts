import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import the GridModule for the Grid component
import { GridModule, PageService, GroupService, LazyLoadGroupService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, GridModule
  ],
  providers: [PageService, GroupService, LazyLoadGroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
