import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth-reducer'
import QuestReducer from './Quest-reducer'
import psyReducer from './psy-reducer'
import messageReducer from './message-reducer'
import BlogReducer from './Blog-reducer'
import NotifReducer from'./notifyer'
import conversationReducer from './conversation-reducer'
const Store = configureStore({
    reducer : {
        
        Auth : authReducer,
        Questionnaire : QuestReducer,
        PsyInscription : psyReducer,
        MessageStore : messageReducer,
        BlogStore: BlogReducer,
        Notification : NotifReducer,
        ConversationStore : conversationReducer,
    }
})

export default Store
