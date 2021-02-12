import Header from '../commun/templete/header'
import SideBar from '../commun/templete/side-bar'
import Foolter from '../commun/templete/foolter'
import React from 'react'
import Messages from '../commun/msg/messages'


export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Foolter />
        <Messages />
    </div>
)
