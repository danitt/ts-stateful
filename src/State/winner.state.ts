import { StateInterface } from './state.interface'
import { GumballMachine } from './../gumball.class'

export class WinnerState implements StateInterface {
  constructor(
    private gumballMachine: GumballMachine
  ) {}

  insertQuarter = () => console.log(`Please wait, we’re already giving you a gumball`)
  ejectQuarter = () => console.log(`Sorry, you already turned the crank`)
  turnCrank = () => console.log(`Turning twice doesn’t get you another gumball!`)
  dispense = () => {
    console.log(`YOU’RE A WINNER! You get two gumballs for your quarter`)
    this.gumballMachine.releaseBall()
    if (this.gumballMachine.getCount() === 0)
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState())
    else {
      this.gumballMachine.releaseBall()
      if (this.gumballMachine.getCount() > 0)
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
      else
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState())
    }
  }
}
