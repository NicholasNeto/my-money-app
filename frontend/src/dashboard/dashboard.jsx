import React, { Component } from 'react'
import { connect } from 'react-redux'

import CompoentHeader from '../commun/templete/contentHeader'
import Content from '../commun/templete/content'
import ValueBox from '../commun/widget/valueBox'
import Row from '../commun/layout/row'


class Dashboard extends Component {

    render() {

        const {credit, debt} =  this.props.summary

        return (
            <div>
                <CompoentHeader title={"Dashboard"} subTitle={"tetse"} />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} tex='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} tex='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} tex='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}


const mapStateToProps = state => ({ summary: state.dashboard.summary })
export default connect(mapStateToProps)(Dashboard)