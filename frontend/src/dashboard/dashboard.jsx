import React, {Component} from 'react'

import  CompoentHeader  from '../commun/templete/contentHeader'
import  Content  from '../commun/templete/content'


class Dashboard extends Component {

    render(){

        return (
            <div>
                <CompoentHeader title={"Dashboard"} subTitle={"tetse"} />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}


export default Dashboard