import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { WidgetComponent } from './components/widget/widget.component';

// PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ListboxModule } from 'primeng/listbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';

// i18n
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { createCustomElement } from '@angular/elements';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    // PrimeNG
    ButtonModule,
    InputTextModule,
    SidebarModule,
    ListboxModule,
    InputTextareaModule,
    FileUploadModule,
    ToggleButtonModule,
    DialogModule,
    ToolbarModule,
    CardModule,
    MenuModule,
    DropdownModule,
    // i18n
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  providers: [],
  entryComponents: [WidgetComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    // Register widget as a custom element for embedding
    const el = createCustomElement(WidgetComponent, { injector });
    if (!customElements.get('exex-chatbot-widget')) {
      customElements.define('exex-chatbot-widget', el);
    }
  }
}
