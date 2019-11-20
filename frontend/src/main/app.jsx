import '../commun/templete/dependencies'
import Header from '../commun/templete/header'
import SideBar from '../commun/templete/side-bar'
import Foolter from '../commun/templete/foolter'
import React from 'react'


export default props => (
    <div className="wrapper">
        <Header  />
        <SideBar />
        <div  className='content-wrapper'>
            <h1>Conteudo</h1>
        </div>
        <Foolter />
    </div>
)
