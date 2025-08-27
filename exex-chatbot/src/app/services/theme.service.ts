import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private exexGreen = '#15b66a';

  constructor() { }

  applyTheme(isDark: boolean): void {
    const root = document.documentElement;
    root.style.setProperty('--exex-green', this.exexGreen);
    if (isDark) {
      document.body.classList.add('dark');
      root.style.setProperty('--bg', '#0b0f13');
      root.style.setProperty('--fg', '#e5e7eb');
      root.style.setProperty('--muted', '#94a3b8');
    } else {
      document.body.classList.remove('dark');
      root.style.setProperty('--bg', '#ffffff');
      root.style.setProperty('--fg', '#0f172a');
      root.style.setProperty('--muted', '#64748b');
    }
  }
}
