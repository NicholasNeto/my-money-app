import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../commun/templete/contentHeader'
import Content from '../commun/templete/content'


import Tabs from '../commun/tab/tabs'
import TabsHeader from '../commun/tab/tabs-header'
import TabsContent from '../commun/tab/tabs-content'
import TabHeader from '../commun/tab/tab-header'
import TabContent from '../commun/tab/tab-content'
import { selectTab } from '../commun/tab/tab-actions'



class BillingCycle extends Component {

    componentWillMount(){
        this.props.selectTab('tabList')
    }

    render() {
        return (
            <div>
                <ContentHeader title={"Ciclos de Pagamentos"} small={"Cadastro"} />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label={'Listar'} icon={'bars'} target={'tabList'} />
                            <TabHeader label={'Incluir'} icon={'plus'} target={'tabCreate'} />
                            <TabHeader label={'Alterar'} icon={'pencil'} target={'tabUpdate'} />
                            <TabHeader label={'Excluir'} icon={'trash-o'} target={'tabDelete'} />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id={'tabList'} ><h1>Lista</h1></TabContent>
                            <TabContent id={'tabCreate'} ><h1>Incluir</h1></TabContent>
                            <TabContent id={'tabUpdate'} ><h1>Alterar</h1></TabContent>
                            <TabContent id={'tabDelete'} ><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)
