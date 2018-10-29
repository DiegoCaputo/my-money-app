import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList'


class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field readOnly={readOnly} name='name' type='string' cols='12 4' label='Nome' placeholder='Informe o nome' component={LabelAndInput} />
                    <Field readOnly={readOnly} name='month' type='number' cols='12 4' label='Mês' placeholder='Informe o mês' component={LabelAndInput} />
                    <Field readOnly={readOnly} name='year' type='number' cols='12 4' label='Ano' placeholder='Informe o ano' component={LabelAndInput} />
                    <CreditList cols='12 6' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)