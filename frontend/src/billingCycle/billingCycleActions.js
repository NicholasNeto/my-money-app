import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize} from 'redux-form'
import { showTabs, selectTab} from '../commun/tab/tab-actions'

const BASE_URL = 'http://localhost:3003/api/'
const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then((response) => {
                toastr.success('Successo', 'Operação realizada com sucesso')
                dispatch(init())
            })
            .catch((error) => {
                Object.keys(error.response.data.errors)
                    .map(it => toastr.error('Error', error.response.data.errors[it].message))
            })
    }


    return {
        type: 'TEMP',
    }
}

export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'), 
        selectTab('tabUpdate'), 
        initialize('billingCycleForm', billingCycle), 
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES),
    ]
}