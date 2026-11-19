const keys = ['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '⌫', '='];
const screen = document.getElementById('screen');
const box = document.getElementById('keys');
let expr = '';

keys.forEach(k => {
  const b = document.createElement('button');
  b.textContent = k;
  if ('/*-+'.includes(k)) b.className = 'op';
  if (k === '=') b.className = 'eq';
  b.onclick = () => press(k);
  box.append(b);
});

function press(k) {
  if (k === 'C') expr = '';
  else if (k === '⌫') expr = expr.slice(0, -1);
  else if (k === '=') {
    try {
      if (!/^[0-9+\-*/(). ]+$/.test(expr)) throw 0;
      expr = String(Function('return ' + expr)());
    } catch {
      expr = 'Xato';
    }
  } else {
    if (expr === 'Xato') expr = '';
    expr += k;
  }
  screen.textContent = expr || '0';
}