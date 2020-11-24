

import React from 'react'
import Jour from './jour'

const Menu = (props) => {
    const title  = props.title
    const startCount = props.startCount

    return(
    <>
        <h1>{title}</h1> {startCount}
        {props.children}
        <ul>
            <Jour title="Lundi" />
            <Jour title="Mardi" />
            <Jour title="Mercredi" />
            <Jour title="Jeudi" />
            <Jour title="Vendredi" />
            <Jour title="Samedi" />
            <Jour title="Dimanche" />
        </ul>
    </> 

)}

export default Menu