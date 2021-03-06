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
import List from './billingCycleList'
import BillingCycleForm from './billingCycleForm'
import { create, update, remove, init } from './billingCycleActions'



class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
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
                                <BillingCycleForm 
                                    onSubmit={this.props.create}
                                    submitClass='primary'
                                    submitLabel='Incluir'
                                    />
                            </TabContent>
                            <TabContent id={'tabUpdate'} >
                                <BillingCycleForm onSubmit={this.props.update}
                                submitClass='info'
                                submitLabel='Alterar'/>
                            </TabContent>
                            <TabContent id={'tabDelete'} >
                                <BillingCycleForm onSubmit={this.props.remove} readOnly={true}
                                submitClass='danger'
                                submitLabel='Excluir' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    create, update, remove, init
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)
