import { NgModule } from "@angular/core";
import { BrowserModule, BrowserTransferStateModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";

@NgModule({

    imports: [
    
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    
    AppModule,
    
    BrowserTransferStateModule
    
    ],
    
    bootstrap: [AppComponent],
    
    })
    
    export class AppBrowserModule {}