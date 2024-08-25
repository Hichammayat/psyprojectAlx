import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addMessage = createAsyncThunk("message/addMessage", async ({Message}) =>{
    return axios.post(`http://localhost:9000/newmessage`, Message)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })
  export const getmessage = createAsyncThunk("message/getmessage",async({conversationID})=>{
    return axios.get(`http://localhost:9000/Getmessage/${conversationID}` )
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })

  const MessageSlice = createSlice({
    name: "Messages",
    initialState :  {
        Message : [],
         status: "",
         Erreur: "",
       },

       extraReducers: {
        
        [addMessage.fulfilled] : (state, action)=>{
            state.Message = [...state.Message, action.payload];
            state.status = "Success";
        },
        [addMessage.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [addMessage.pending] : (state) =>{
           state.status = "Pending"
        },
        [getmessage.fulfilled] : (state, action)=>{
          state.Message = action.payload;
          console.log(action.payload)
          state.status = "Success";
      },
      [getmessage.rejected] : (state, action) =>{
        state.Erreur = action.payload
        state.status = "Rejected"
      },
      [getmessage.pending] : (state) =>{
         state.status = "Pending"
      },
    }
  });

  export default MessageSlice.reducer;
