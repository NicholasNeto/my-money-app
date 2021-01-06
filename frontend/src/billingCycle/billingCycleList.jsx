

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate } from './billingCycleActions'


class BillingCycleList extends Component {
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(it =>
            <tr key={it._id} >
                <td>{it.name}</td>
                <td>{it.month}</td>
                <td>{it.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(it)}>
                        <i className='fa fa-pencil' />
                    </button>
                </td>
            </tr>
        )
    }

    render() {
        console.log('list', this.props.list)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
