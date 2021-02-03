import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './billingCycleActions'
import LabelAndInput from '../commun/form/labelAndInput';
import ItemList from './itemList'

class BillingCycleForm extends Component {

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field
            name='name'
            component={LabelAndInput}
            cols={'12 4'}
            placeholder={'Informe o nome'}
            label='Nome'
            readOnly={readOnly}
          />
          <Field
            name='month'
            component={LabelAndInput}
            cols={'12 4'}
            placeholder={'Informe o mês'}
            type='number'
            label='Mês'
            readOnly={readOnly}
          />
          <Field
            name='year'
            component={LabelAndInput}
            cols={'12 4'}
            placeholder={'Informe o ano'}
            type='number'
            label='Ano'
            readOnly={readOnly}
          />
          <ItemList cols="12 6" list={credits} readOnly={readOnly} legend='Creditos' field='credits' />
          <ItemList cols="12 6" list={debts} readOnly={readOnly} legend='Debitos' field='debts' />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
          <button type='button' className='btn btn-default' onClick={this.props.init} >Cancelar</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector("billingCycleForm")
const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)