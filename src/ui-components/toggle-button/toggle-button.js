import React, { Component } from 'react';
import styles from './toggleButton.module.scss'
const { container, item, active, controlInactive } = styles;

const generateItemStyle = (itm) => `${item} ${itm.active ? active : ''}`;

const generateContainerStyle = (active) => `${container} ${active ? '' : controlInactive}`;

export const ToggleButton = ({ items, handleClick, id,
    active }) => <div className={generateContainerStyle(active)} id={id}>
        {items.map((itm, index) => {
            return <div key={index} index={index} onClick={handleClick}
                className={generateItemStyle(itm)}>
                {itm.text}</div>
        })
        }</div>;