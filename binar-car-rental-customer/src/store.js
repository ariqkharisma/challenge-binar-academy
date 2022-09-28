import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Feature/Auth/auth-slice';
import messageReducer from './Feature/Auth/message-slice';


export default configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
    devTools : true,
})


