import { combineReducers } from 'redux'


import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../commun/tab/tab-reducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab : TabReducer
})

export default rootReducer