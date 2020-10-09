import React, { Component } from 'react'

import ContentHeader from '../commun/templete/contentHeader'
import Content from '../commun/templete/content'


import Tabs from '../commun/tab/tabs'
import TabsHeader from '../commun/tab/tabs-header'
import TabsContent from '../commun/tab/tabs-content'
import TabHeader from '../commun/tab/tab-header'



class BillingCycle extends Component {
    constructor(props) {
        super(props)
        this.state = { slected: null }
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
                        <TabsContent></TabsContent>
                    </Tabs>

                </Content>
            </div>
        )
    }

}

export default BillingCycle