import React from 'react'

import Header from '../commun/templete/header'
import SideBar from '../commun/templete/side-bar'
import Foolter from '../commun/templete/foolter'
import Messages from '../commun/msg/messages'

import Routes from './routes'

const App = () => (
    <div className="wrapper">
        <Header />
        <SideBar />
        < Routes />
        <Foolter />
        <Messages />
    </div>
)

export default App
