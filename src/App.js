import React, { Component } from 'react';
import './App.css';
import { ToggleButton } from './ui-components/toggle-button/toggle-button';
import styles from './App.module.scss';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {toggleAction} from "./actions/deliveryPossibility";
import {outcomeAction} from "./actions/outcomes";
const { header, confirmBtn, outcomeControlContainer, app } = styles;

class App extends Component {
  constructor(props) {
    super(props);
    /* this.state = {
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
    } */
  }
  handleConfirmClick = (event) => {
    //
  }
  handleToggleClick = (e) => {
    const {toggleAction} = this.props;
    e.stopPropagation();
    const changedDeliveryCategory = e.target.parentElement.id;
    const changedControlIndex = e.target.getAttribute('index');
    toggleAction(changedDeliveryCategory,changedControlIndex);

    /* const items = this.state[changedDeliveryCategory].items;
    const clickedItem = items[changedControlIndex];
    let activeItem = { ...clickedItem, active: !clickedItem.active };
    let newItems = items.map(itm => ({ ...itm, active: false }));
    newItems.splice(changedControlIndex, 1, activeItem);

    this.setState((prevState) => {
      let newState = { ...prevState };
      newState[changedDeliveryCategory] = { items: [...newItems], active: true };
      return newState;
    }); */
  }
  render() {
    const {currentDelivery} = this.props;
    return (
      <div className={app}>
        <div className={outcomeControlContainer}>
          <h4>Delivery Outcome</h4>
          <div className={header}>
            <h5> Score :</h5>
            <ToggleButton id='runCounter' items={currentDelivery.runCounter.items}
             handleClick={this.handleToggleClick} active = {currentDelivery.runCounter.active} />
          </div>
          <div className={header}>
            <h5> Howz That :</h5>
            <ToggleButton id='wicketCounter' items={currentDelivery.wicketCounter.items} 
            handleClick={this.handleToggleClick} active={currentDelivery.wicketCounter.active} />
          </div>
          <div className={header}>
            <h5> Faulty Deliveries :</h5>
            <ToggleButton id='faultyDeliveries' items={currentDelivery.faultyDeliveries.items} 
            handleClick={this.handleToggleClick} active={currentDelivery.faultyDeliveries.active}  />
          </div>
        </div>
        <div className={confirmBtn} onClick={this.handleConfirmClick}>
          {'Confirm'}
        </div>
      </div>
    );
  }
}

//export default App;
function mapStateToProps(state) {
  return { currentDelivery: state.currentDelivery }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleAction, outcomeAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);