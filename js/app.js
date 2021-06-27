import { createMachine, state, transition, interpret, reduce, immediate, state as final } from './lib/machine.js';


const machine = createMachine({
  idle: state(
    transition('roll', 'roll1',
      reduce(({count}) => ({ count: count + 1 }))
    )
  ),

  roll1: state(
    transition('roll', 'roll2',
      reduce(({count}) => ({ count: count + 1 }))
    ),
    transition('resolve', 'resolve')
  ),

  roll2: state(
    transition('roll', 'roll3',
      reduce(({count}) => ({ count: count + 1 }))
    ),
    transition('resolve', 'resolve')
  ),

  roll3: state(
    immediate('resolve')
  ),

  resolve: final()
}, () => ({ count: 0 }));

const service = interpret(machine, ({ context }) => {
  const { count } = context;
  console.log(count);
  output.value = count;
});

const rollBtn = document.querySelector('.roll');
rollBtn.addEventListener('click', () => {
  service.send('roll');
  console.log(service.machine.current);
});

const resolveBtn = document.querySelector('.resolve');
resolveBtn.addEventListener('click', () => {
  service.send('resolve');
  console.log(service.machine.current);
});

const output = document.querySelector('output');
