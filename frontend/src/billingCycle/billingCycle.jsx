import React, { Component } from 'react'

import ContentHeader from '../commun/templete/contentHeader'
import Content from '../commun/templete/content'


import Tabs from '../commun/tab/tabs'
import TabsHeader from '../commun/tab/tabsHeader'
import TabsContent from '../commun/tab/tabsContent'

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
                        <TabsHeader></TabsHeader>
                        <TabsContent></TabsContent>
                    </Tabs>

                </Content>
            </div>
        )
    }

}

export default BillingCycle