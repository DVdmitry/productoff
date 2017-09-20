import { ZnizhkiPage } from './app.po';

describe('znizhki App', function() {
  let page: ZnizhkiPage;

  beforeEach(() => {
    page = new ZnizhkiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
