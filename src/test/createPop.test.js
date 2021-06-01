import createPop from '../js/createPop';

test('testing body of header', () => {
  const element = createPop('Header', 'text', 'id');
  const header = element.querySelector('.popover-header');
  expect(header.textContent).toBe('Header');
});

test('testing body of popover', () => {
  const element = createPop('Header', 'text', 'id');
  const text = element.querySelector('.popover-text');
  expect(text.textContent).toBe('text');
});

test('testing id of popover', () => {
  const element = createPop('Header', 'text', 'id');
  expect(element.id).toBe('id');
});
