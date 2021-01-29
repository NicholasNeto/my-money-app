import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../commun/templete/contentHeader'
import Content from '../commun/templete/content'


import Tabs from '../commun/tab/tabs'
import TabsHeader from '../commun/tab/tabs-header'
import TabsContent from '../commun/tab/tabs-content'
import TabHeader from '../commun/tab/tab-header'
import TabContent from '../commun/tab/tab-content'
import { selectTab, showTabs } from '../commun/tab/tab-actions'
import List from './billingCycleList'
import BillingCycleForm from './billingCycleForm'
import { create, update } from './billingCycleActions'



class BillingCycle extends Component {

    componentWillMount() {
         this.props.selectTab('tabList')
        this.props.showTabs("tabList", "tabCreate")
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
                            <TabContent id={'tabList'} >
                                < List />
                            </TabContent>
                            <TabContent id={'tabCreate'} >
                                <BillingCycleForm onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id={'tabUpdate'} >
                                <BillingCycleForm onSubmit={this.props.update} />
                            </TabContent>
                            <TabContent id={'tabDelete'} ><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab, showTabs, create, update,
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)
