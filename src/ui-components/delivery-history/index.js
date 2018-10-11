import React from 'react';
import styles from './deliveryHistory.module.scss';
const {item,primaryText,secondaryText} = styles;
export const DeliveryHistory = ({outcomes}) => outcomes.map(itm => 
                <div className={item}>
                    <div className={primaryText}>
                        {itm.primaryText}
                    </div>
                    <div className={secondaryText}>
                        {itm.secondaryText}
                    </div>
                </div>)