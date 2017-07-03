import { StateInterface } from './state.interface'
import { GumballMachine } from './../gumball.class'

export class HasQuarterState implements StateInterface {
  constructor(
    private gumballMachine: GumballMachine
  ) {}

  insertQuarter = () => console.log(`You can’t insert another quarter`)
  ejectQuarter = () => {
    console.log(`Quarter returned`)
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
  }
  turnCrank = () => {
    console.log(`Crank turned..`)
    this.gumballMachine.setState(this.gumballMachine.getSoldState())
  }
  dispense = () => console.log(`No gumball dispensed`)

}
