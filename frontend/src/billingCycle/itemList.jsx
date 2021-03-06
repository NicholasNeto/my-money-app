import React, { Component } from 'react'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../commun/layout/grid'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Input from '../commun/form/input'
import If from '../commun/operator/if'


class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert("billingCycleForm", `${this.props.field}`, index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove("billingCycleForm", `${this.props.field}`, index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={Input} placeholder='Informe o nome' readOnly={this.props.readOnly} /></td>
                <td><Field name={`${this.props.field}[${index}].value`} component={Input} placeholder='Informe o valor' readOnly={this.props.readOnly} /></td>
                <If test={this.props.showStatus}>
                <td><Field name={`${this.props.field}[${index}].status`} component={Input} placeholder='Informe o Status' readOnly={this.props.readOnly} /></td>
                </If>
                <td>
                    <button
                        type="button"
                        className="btn btn-success">
                        <i className='fa fa-plus' onClick={() => this.add(index + 1)} />
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning">
                        <i className='fa fa-clone' onClick={() => this.add(index + 1, item)} />
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger">
                        <i className='fa fa-trash-o' onClick={() => this.remove(index)} />
                    </button>
                </td>
            </tr>
        ))
    }

    render() {

        const { legend } = this.props
        return (
            <Grid
                cols={this.props.cols} >
                <fieldset>
                    <legend>{legend}</legend>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>

                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(ItemList);