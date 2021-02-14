import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from '../commun/templete/header'
import SideBar from '../commun/templete/side-bar'
import Foolter from '../commun/templete/foolter'
import Messages from '../commun/msg/messages'

import Routes from './routes'

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        < Routes />
        <Foolter />
        <Messages />
    </div>
)
