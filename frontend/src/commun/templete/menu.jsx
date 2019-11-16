import React from 'react'
import MenuItem from '../templete/menu-item'
import MenuTree from '../templete/menu-tree'


export default props => (

    <ul className='sidebar-menu'>
      <MenuItem path="/#/" label="Dashboard" icon='dashboard' />
      <MenuTree label='Cadastro' icon='edit'>
         <MenuItem path="#billingCycles" label="Ciclos de Pagamentos" icon='usd' />
      </MenuTree>
    </ul>
)