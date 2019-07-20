import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): object {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(): object {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
