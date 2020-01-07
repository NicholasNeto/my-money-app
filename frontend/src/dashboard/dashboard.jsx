import React, { Component } from 'react'

import CompoentHeader from '../commun/templete/contentHeader'
import Content from '../commun/templete/content'
import ValueBox from '../commun/widget/valueBox'
import Row from '../commun/layout/row'


class Dashboard extends Component {

    render() {

        return (
            <div>
                <CompoentHeader title={"Dashboard"} subTitle={"tetse"} />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value=' R$ 10' tex='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value=' R$ 10' tex='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value=' R$ 0' tex='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}


export default Dashboard