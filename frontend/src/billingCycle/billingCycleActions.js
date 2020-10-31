import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3003/api/'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    axios.post(`${BASE_URL}/billingCycles`, values)
        .then((response) => {
            toastr.success('Successo', 'Operação realizada com sucesso')
        })
        .catch((error) => {
            Object.keys(error.response.data.errors)
                .map(it => toastr.error('Error', error.response.data.errors[it].message))
        })
    return {
        type: 'TEMP',
    }
}