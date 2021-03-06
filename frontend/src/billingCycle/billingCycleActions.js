import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as  initialValues} from 'redux-form'
import { showTabs, selectTab} from '../commun/tab/tab-actions'

const BASE_URL = 'http://localhost:3003/api/'
const INITIAL_VALUES = {credits: [{}], debts:[{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then((response) => {
                toastr.success('Successo', 'Operação realizada com sucesso')
                dispatch(init())
            })
            .catch((error) => {
                Object.keys(error.response.data.errors)
                    .map(it => toastr.error('Error', error.response.data.errors[it].message))
            })
    }
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

export function create(values) {
    return submit(values, 'post')
}

export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'), 
        selectTab('tabUpdate'), 
        initialValues('billingCycleForm', billingCycle), 
    ]
}

export function showDelete(billingCycle){
    return [
        showTabs('tabDelete'), 
        selectTab('tabDelete'), 
        initialValues('billingCycleForm', billingCycle), 
    ]
}

export function init() {
    debugger
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialValues('billingCycleForm', INITIAL_VALUES),
    ]
}