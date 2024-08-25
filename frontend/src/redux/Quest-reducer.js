import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const userAnswer = createAsyncThunk("Questionnaire/userAnswer", async ({id,Answer}) =>{
    return axios.post(`http://localhost:9000/Questionnaire/${id}`, Answer)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })
  export const checkUserId = createAsyncThunk("Questionnaire/checkUserId", async (id) =>{
    return axios.post(`http://localhost:9000/checkAnswer/${id}` )
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })
  const AnswerSlice = createSlice({
    name: "Answers",
    initialState :  {
        Answer : {}, 
         status: "",
         Erreur: "",
       },

       extraReducers: {
        
        [userAnswer.fulfilled] : (state, action)=>{
            state.Answer = action.payload;
            state.status = "Success";
        },
        [userAnswer.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [userAnswer.pending] : (state) =>{
           state.status = "Pending"
        },
        [checkUserId.fulfilled] : (state, action)=>{
          console.log(action.payload);
          state.Answer = action.payload;
          state.status = "Success";
      },
      [checkUserId.rejected] : (state, action) =>{
        state.Erreur = action.payload
        state.status = "Rejected"
      },
      [checkUserId.pending] : (state) =>{
         state.status = "Pending"
      },
    }
  });

  export default AnswerSlice.reducer;
