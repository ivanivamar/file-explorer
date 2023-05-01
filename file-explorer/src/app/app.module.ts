import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        FileExplorerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
