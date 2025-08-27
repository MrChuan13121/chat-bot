import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exex-chatbot';
  currentLang = 'vi';
  dark = false;

  constructor(private translate: TranslateService, private themeService: ThemeService) {
    translate.addLangs(['vi', 'en', 'ja']);
    translate.setDefaultLang('vi');
    const browserLang = translate.getBrowserLang();
    this.currentLang = ['vi', 'en', 'ja'].includes(browserLang) ? browserLang : 'vi';
    translate.use(this.currentLang);
    this.themeService.applyTheme(this.dark);
  }

  setLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  toggleDark() {
    this.themeService.applyTheme(this.dark);
  }
}
