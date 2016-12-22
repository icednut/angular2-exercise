import { Angular2TodoStartPage } from './app.po';

describe('angular2-todo-start App', function() {
  let page: Angular2TodoStartPage;

  beforeEach(() => {
    page = new Angular2TodoStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
