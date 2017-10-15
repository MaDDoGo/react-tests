import nightmare from 'nightmare';

describe('When visiting the homepage', () => {
  test('it welcomes the user', (done) => {
    const page = nightmare().goto('http://localhost:8080');

    page.evaluate(() => document.body.textContent)
      .end().then((text) => {
        expect(text).toContain('Hello from ES6');
        done();
      });
  });
});
