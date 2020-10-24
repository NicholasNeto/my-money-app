import { combineReducers } from 'redux'


import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../commun/tab/tab-reducer'
import BillingCycleReducer from '../billingCycle/billingCycle-reducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab : TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer