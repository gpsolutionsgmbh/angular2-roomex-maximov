import { RoomexPage } from './app.po';

describe('roomex test app', function() {
  let page: RoomexPage;

  beforeEach(() => {
    page = new RoomexPage();
  });

  it('should display test app title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Roomex Test App');
  });
});
