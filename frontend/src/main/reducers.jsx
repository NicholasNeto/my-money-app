import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../commun/tab/tab-reducer'
import BillingCycleReducer from '../billingCycle/billingCycle-reducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab : TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer
})

export default rootReducer