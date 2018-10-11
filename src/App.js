import React, { Component } from 'react';
import './App.css';
import { ToggleButton } from './ui-components/toggle-button/toggle-button';
import styles from './App.module.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleAction } from "./actions/deliveryPossibility";
import { outcomeAction } from "./actions/outcomes";
import { generateDeliveryOutcome, generateOutcomeDisplayText } from "./helpers/outcome-decision-helper";
import {DeliveryHistory } from "./ui-components/delivery-history";
const { header, confirmBtn, outcomeControlContainer, app, deliveryHistory } = styles;

class App extends Component {
  handleConfirmClick = (event) => {
    const { currentDelivery, outcomeAction } = this.props;
    outcomeAction(generateDeliveryOutcome(currentDelivery));
  }
  handleToggleClick = (e) => {
    const { toggleAction } = this.props;
    e.stopPropagation();
    const changedDeliveryCategory = e.target.parentElement.id;
    const changedControlIndex = e.target.getAttribute('index');
    toggleAction(changedDeliveryCategory, changedControlIndex);
  }
  render() {
    const { currentDelivery, outcomes } = this.props;
    return (
      <div className={app}>
        <div className={outcomeControlContainer}>
          <h4>Delivery Outcome</h4>
          <div className={header}>
            <h5> Score :</h5>
            <ToggleButton id='runCounter' items={currentDelivery.runCounter.items}
              handleClick={this.handleToggleClick} active={currentDelivery.runCounter.active} />
          </div>
          <div className={header}>
            <h5> Howz That :</h5>
            <ToggleButton id='wicketCounter' items={currentDelivery.wicketCounter.items}
              handleClick={this.handleToggleClick} active={currentDelivery.wicketCounter.active} />
          </div>
          <div className={header}>
            <h5> Faulty Deliveries :</h5>
            <ToggleButton id='faultyDeliveries' items={currentDelivery.faultyDeliveries.items}
              handleClick={this.handleToggleClick} active={currentDelivery.faultyDeliveries.active} />
          </div>
        </div>
        <div className={confirmBtn} onClick={this.handleConfirmClick}>
          {'Confirm'}
        </div>
        <div className={deliveryHistory}>
          <DeliveryHistory outcomes={outcomes}/>
        </div>
      </div>
    );
  }
}

//export default App;
function mapStateToProps(state) {
  return { currentDelivery: state.currentDelivery,outcomes:state.outcomes.map(generateOutcomeDisplayText) }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleAction, outcomeAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);