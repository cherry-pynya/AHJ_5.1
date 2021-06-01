import Btn from '../js/btn';

test('testing pop over header', () => {
  document.body.innerHTML = '<button class="btn" type="submit" data-title=\'Hi, I am title\' data-content=\'This is poopover text\' data-id=\'1st-popvover\'> Click here to reveal </button>';
  document.btn = new Btn('.btn');
  document.btn.onClick();
  expect(document.querySelector('.popover-header').textContent).toBe('Hi, I am title');
});

test('testing pop over text', () => {
  document.body.innerHTML = '<button class="btn" type="submit" data-title=\'Hi, I am title\' data-content=\'This is poopover text\' data-id=\'1st-popvover\'> Click here to reveal </button>';
  document.btn = new Btn('.btn');
  document.btn.onClick();
  expect(document.querySelector('.popover-text').textContent).toBe('This is poopover text');
});

test('testing pop over id', () => {
  document.body.innerHTML = '<button class="btn" type="submit" data-title=\'Hi, I am title\' data-content=\'This is poopover text\' data-id=\'1st-popvover\'> Click here to reveal </button>';
  document.btn = new Btn('.btn');
  document.btn.onClick();
  const elem = document.querySelector('.popover-container');
  expect(elem.id).toBe('1st-popvover');
});
