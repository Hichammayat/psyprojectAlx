import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const newConversation = createAsyncThunk("conversation/newConversation", async({Conversation})=>{
    return axios.post(`http://localhost:9000/createConversation`, Conversation)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
})
export const getConversation = createAsyncThunk("conversation/getConversation",async({psychiatre_id})=>{
  return axios.get(`http://localhost:9000/getConversation/${psychiatre_id}` )
  .then(res => {return res.data})
  .catch(err => {return err.data.message})
})
export const getConversationPsy = createAsyncThunk("conversation/getConversationPsy",async({userId})=>{
  return axios.get(`http://localhost:9000/getConversationPsy/${userId}` )
  .then(res => {return res.data})
  .catch(err => {return err.data.message})
})

const ConversationSlice = createSlice({
    name: "Conversation",
    initialState :  {
        Conversation : [],
         status: "",
         Erreur: "",
       },

       extraReducers: {
        [getConversation.fulfilled] : (state, action)=>{
          
          state.Conversation = { 
            conversations: action.payload.conversations, 
            users: action.payload.users 
          };
          console.log(action.payload.conversations)
          console.log(action.payload.users)
          state.status = "Success";
        },
        [getConversation.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [getConversation.pending] : (state) =>{
           state.status = "Pending"
        },
        
        [newConversation.fulfilled] : (state, action)=>{
            state.Conversation = [...state.Conversation, action.payload];
            state.status = "Success";
        },
        [newConversation.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [newConversation.pending] : (state) =>{
           state.status = "Pending"
        },
        [getConversationPsy.fulfilled] : (state, action)=>{
          
          state.Conversation = { 
            conversations: action.payload.conversations, 
            psychiatre: action.payload.psychiatre
          };
          console.log(action.payload.conversations)
          console.log(action.payload.psychiatre)
          state.status = "Success";
        },
        [getConversationPsy.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [getConversationPsy.pending] : (state) =>{
           state.status = "Pending"
        },
    }
  });

  export default ConversationSlice.reducer;
