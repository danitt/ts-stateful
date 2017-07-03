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
    if (this.randomWinner() === 2 && this.gumballMachine.getCount() > 1)
      this.gumballMachine.setState(this.gumballMachine.getWinnerState())
    else
      this.gumballMachine.setState(this.gumballMachine.getSoldState())
  }
  dispense = () => console.log(`No gumball dispensed`)

  randomWinner = () => Math.floor(Math.random() * 3)

}
