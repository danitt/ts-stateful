import { StateInterface } from './State/state.interface'
import { NoQuarterState } from './State/noQuarter.state'
import { HasQuarterState } from './State/hasQuarter.state'
import { SoldState } from './State/sold.state'
import { SoldOutState } from './State/soldOut.state'
import { WinnerState } from './State/winner.state'

export class GumballMachine {
  private noQuarterState: NoQuarterState = new NoQuarterState(this)
  private hasQuarterState: HasQuarterState = new HasQuarterState(this)
  private soldState: SoldState = new SoldState(this)
  private soldOutState: SoldOutState = new SoldOutState(this)
  private winnerState: WinnerState = new WinnerState(this)
  private currentState: StateInterface = this.soldOutState
  constructor(
    private gumballsCount:number = 0
  ) {
    if (this.gumballsCount > 0) this.currentState = this.noQuarterState
  }

  insertQuarter = () => this.currentState.insertQuarter()
  ejectQuarter = () => this.currentState.ejectQuarter()
  turnCrank = () => {
    this.currentState.turnCrank()
    this.currentState.dispense()
  }
  releaseBall = () => {
    console.log(`Gumball released..`)
    if (this.gumballsCount > 0) this.gumballsCount--
  }
  getCount = () => this.gumballsCount

  setState = (state: StateInterface) => this.currentState = state
  getNoQuarterState = () => this.noQuarterState
  getHasQuarterState = () => this.hasQuarterState
  getSoldState = () => this.soldState
  getSoldOutState = () => this.soldOutState
  getWinnerState = () => this.winnerState
}
