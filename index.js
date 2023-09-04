let x = '';
let y = '';
let operator = '';
let result = false;

const display = document.querySelector('.display');
const degree = document.querySelector('.degree');
const clickButton = document.querySelectorAll('button[type="button"]');

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operation = ['+', '-', 'x', degree.textContent];

clickButton.forEach(button => button.addEventListener('click', calc));

function calc(event) {
  display.textContent = '';

  const key = event.target.textContent;

  if (number.includes(key)) {
    if (y === '' && operator === '') {
      if (x === '0' && key === '0') {
        x = '0';
      } else {
          if (x === '0' && key !== '0') {
            x = key;
          } else {
            x += key;
          } 
      }
      
      console.log(x, y, operator);

      display.textContent = x;
    } else {
        if (x !== '' && y !== '' && result){
          y = key;

          result = false;

          display.textContent = y;
        } else {
          if (y === '0' && key === '0') {
            y = '0';
          } else {
            if (y === '0' && key !== '0') {
              y = key;
            } else {
              y += key;
            }
          }

          display.textContent = y;
          
          result = false;

          console.log(x, y, operator);
        }
      }
  }

  if (operation.includes(key)) {
    display.textContent = x;

    if (y === '') {
      operator = key;
    } else {
        switch (operator) {
          case '+':
            x = (+x) + (+y);

            display.textContent = x;

            y = '';

            operator = key;
          break;
    
          case '-':
            x = x - y;

            display.textContent = x;

            y = '';

            operator = key;
          break;
    
          case 'x':
            x = x * y;

            display.textContent = x;

            y = '';

            operator = key;
          break;
    
          case degree.textContent:
            if (y === '0') {
              display.textContent = 'error';
    
              x = '';
    
              y = '';
    
              operator = '';
    
              return;
            }
    
            x = x / y;

            display.textContent = x;

            y = '';

            operator = key;
          break;
        }
      }

    operator = key;

    console.log(x, y, operator);

    return;
  }

  if ( key === 'C') {
    x = '';

    y = '';
  
    operator = '';
  
    result = false;
  
    display.textContent = 0;
  }

  if ( key === '+/-') {
    if (y === '' && operator === '') {
      if (x !== '0' && !x.includes('-')) {
        x = '-' + x;
      } else {
        if (x.includes('-')) {
          x = x.slice(1);
        }
      }
    
      display.textContent = x;
    } else {
      if (y !== '0' && !y.includes('-')) {
        y = '-' + y;
      } else {
        if (y.includes('-')) {
          y = y.slice(1);
        }
      }

      display.textContent = y;
    }
  }

  if (key === '%') {
    y = y / 100 * x;

    display.textContent = y;
  }

  if (key === '.') {
    if (y === '' && operator === '') {
      if (x === '') {
        x = x + '0.';
      } else {
        if (!x.includes('.')) {
          x = x + event.target.textContent;
        } 
      }
    
      display.textContent = x;
    } else {
      if (y === '0') {
        y = y + '.';

        display.textContent = y;
      } else {
        if (!y.includes('.')) {
          y = y + event.target.textContent;
        } 

      display.textContent = y;
      }
    }
  }

  if (key === '=') {
    if (y === '') {
      y = x;
    }

    switch (operator) {
      case '+':
        x = (+x) + (+y);

        y = '';
        break;

      case '-':
        x = x - y;

        y = '';
        break;

      case 'x':
        x = x * y;

        y = '';
        break;

      case degree.textContent:
        if (y === '0') {
          display.textContent = 'error';

          x = '';

          y = '';

          operator = '';

          return;
        }

        x = x / y;

        y = '';
        break;
    }

    result = true;

    display.textContent = x;

    console.log(x, y, operator);
  }
}