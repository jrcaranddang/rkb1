import { Rkb1Page } from './app.po';

describe('rkb1 App', () => {
  let page: Rkb1Page;

  beforeEach(() => {
    page = new Rkb1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
