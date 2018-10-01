import React, { Component } from 'react';
import './App.css';
import { ToggleButton } from './ui-components/toggle-button/toggle-button';
import styles from './App.module.scss';
const { header, confirmBtn, outcomeControlContainer, app } = styles;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runCounter: {
        items: [{ id: 'DotBall', text: 'Dot Ball' },
        { id: 'SixRuns', text: '6 Runs' }, { id: 'FourRuns', text: '4 Runs' },
        { id: 'ThreeRuns', text: '3 Runs' },
        { id: 'TwoRuns', text: '2 Runs' }, { id: 'OneRun', text: '1 Run' }], active: true
      },
      wicketCounter: {
        items: [{ id: 'HitWicket', text: 'Hit Wicket' },
        { id: 'Bowled', text: 'Bowled' }, { id: 'Stumped', text: 'Stumped' },
        { id: 'RunOut', text: 'Run Out' }, { id: 'Caught', text: 'Caught' },
        { id: 'LBW', text: 'LBW' }, { id: 'CaughtNBowled', text: 'Caught N Bowled' }], active: true
      },
      faultyDeliveries: {
        items: [{ id: 'NoBall', text: 'No Ball' },
        { id: 'Wide', text: 'Wide' }, { id: 'DeadBall', text: 'Dead Ball' },
        { id: 'Byes', text: 'Byes' }], active: true
      }
    }
  }
  handleConfirmClick = (event) => {
    //
  }
  handleToggleClick = (e) => {
    e.stopPropagation();
    const controlId = e.target.parentElement.id;
    const items = this.state[controlId].items;
    const clickedItem = items[e.target.getAttribute('index')];
    let activeItem = { ...clickedItem, active: !clickedItem.active };
    let newItems = items.map(itm => ({ ...itm, active: false }));
    newItems.splice(e.target.getAttribute('index'), 1, activeItem);

    let newState ={...this.state,
      [controlId]:{items: [...newItems], active: this.state[controlId].active }
      };

    this.setState((prevState) => {
      let newState = { ...prevState };
      newState[controlId] = { items: [...newItems], active: true };
      return newState;
    });
  }
  render() {
    return (
      <div className={app}>
        <div className={outcomeControlContainer}>
          <h4>Delivery Outcome</h4>
          <div className={header}>
            <h5> Score :</h5>
            <ToggleButton id='runCounter' items={this.state.runCounter.items}
             handleClick={this.handleToggleClick} active = {this.state.runCounter.active} />
          </div>
          <div className={header}>
            <h5> Howz That :</h5>
            <ToggleButton id='wicketCounter' items={this.state.wicketCounter.items} 
            handleClick={this.handleToggleClick} active={this.state.wicketCounter.active} />
          </div>
          <div className={header}>
            <h5> Faulty Deliveries :</h5>
            <ToggleButton id='faultyDeliveries' items={this.state.faultyDeliveries.items} 
            handleClick={this.handleToggleClick} active={this.state.faultyDeliveries.active}  />
          </div>
        </div>
        <div className={confirmBtn} onClick={this.handleConfirmClick}>
          {'Confirm'}
        </div>
      </div>
    );
  }
}

export default App;
