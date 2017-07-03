import { StateInterface } from './state.interface'
import { GumballMachine } from './../gumball.class'

export class SoldOutState implements StateInterface {
  constructor(
    private gumballMachine: GumballMachine
  ) {}

  insertQuarter = () => console.log(`You can’t insert a quarter, the machine is sold out`)
  ejectQuarter = () => console.log(`You can’t eject, you haven’t inserted a quarter yet`)
  turnCrank = () => console.log(`You turned, but there are no gumballs`)
  dispense = () => console.log(`No gumball dispensed`)
}
