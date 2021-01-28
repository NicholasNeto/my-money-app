import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import labelAndInput from '../commun/form/labelAndInput';

class BillingCycleForm extends Component {

  render() {
    const { handleSubmit } = this.props

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field
            name='name'
            component={labelAndInput}
            cols={'12 4'}
            placeholder={'Informe o nome'}
            label='Nome'
          />
          <Field
            name='month'
            component={labelAndInput}
            cols={'12 4'}
            placeholder={'Informe o mês'}
            type='number'
            label='Mês'
          />
          <Field
            name='year'
            component={labelAndInput}
            cols={'12 4'}
            placeholder={'Informe o ano'}
            type='number'
            label='Ano' />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)