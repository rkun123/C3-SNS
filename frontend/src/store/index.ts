import { Action, combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { ThunkAction } from 'redux-thunk'
import authSlice from './auth'
import userSlice from './user'
import postSlice from './post'
import uiSlice from './ui'
import tagSlice from './tag'
import subscribesSlice from './subscribes'
import settingsSlice from './settings'
import notificationsSlice from './notifications/index'

const reducers = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
    post: postSlice.reducer,
    ui: uiSlice.reducer,
    tag: tagSlice.reducer,
    subscribes: subscribesSlice.reducer,
    settings: settingsSlice.reducer,
    notifications: notificationsSlice.reducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export type APIError = {
    error: string
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export type RootState = ReturnType<typeof store.getState>

export default store