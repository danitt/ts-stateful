import { StateInterface } from './state.interface'
import { GumballMachine } from './../gumball.class'

export class NoQuarterState implements StateInterface {
  constructor(
    private gumballMachine: GumballMachine
  ) {}

  insertQuarter = () => {
    console.log(`You inserted a quarter`)
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())
  }
  ejectQuarter = () => console.log(`You haven’t inserted a quarter`)
  turnCrank = () => console.log(`You turned, but there’s no quarter`)
  dispense = () => console.log(`You need to pay first`)
}
