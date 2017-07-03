import { GumballMachine } from './gumball.class'

const machine1 = new GumballMachine(5)

for (let i = 0; i < 5; i++) {
  machine1.insertQuarter()
  machine1.turnCrank()
}

machine1.refill(10)
machine1.insertQuarter()
