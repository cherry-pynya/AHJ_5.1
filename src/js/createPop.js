export default function createPop(head, txt, id) {
  const pop = document.createElement('div');
  const header = document.createElement('h2');
  const message = document.createElement('span');
  pop.className = 'popover-container';
  pop.id = id;
  header.className = 'popover-header';
  message.className = 'popover-text';
  header.textContent = head;
  message.textContent = txt;
  pop.insertAdjacentElement('afterbegin', header);
  pop.insertAdjacentElement('beforeend', message);
  return pop;
}
