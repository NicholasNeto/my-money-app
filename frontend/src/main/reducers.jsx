import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrdReducer } from 'react-redux-toastr'


import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../commun/tab/tab-reducer'
import BillingCycleReducer from '../billingCycle/billingCycle-reducer'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab : TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrdReducer,
    auth: AuthReducer
})

export default rootReducer