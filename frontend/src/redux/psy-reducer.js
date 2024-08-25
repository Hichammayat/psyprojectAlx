import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const checkPsy= createAsyncThunk("loginpsy/checkPsy",async({psyAccount})=>{
  return axios.post('http://localhost:9000/loginpsy',psyAccount)
  .then(res => {return res.data})
  
  .catch(err => {return err.data.message})
})
export const GetPsychiatreList = createAsyncThunk('Psy/GetPsychiatreList', async()=> {
  return axios.get('http://localhost:9000/GetPsychiatres')
  .then(res => {return res.data})
  .catch(err => {return err.data.message})
})
export const updateProfilePsy  = createAsyncThunk("Psy/updateProfilePsy",async({id,userUpdates})=>{
  return axios.put(`http://localhost:9000/updatePsy/${id}`,userUpdates)
  .then(res => {return res.data})
  .catch(err => {return err.data.message})
})
export const uploadImage = createAsyncThunk('Psy/uploadImage', async({id,image})=> {
  return axios.post(`http://localhost:9000/updateProfilePic/${id}`, image)
  .then((res) => {return res.data})
  .catch((err) => {console.error(err)})
})
const PsyApplySlice = createSlice({
    name: "PsyInscription",
    initialState :  {
        psychiatre : [],
         status: "",
         Erreur: "",
       },

       extraReducers: {
        
        
        [checkPsy.fulfilled]: (state, action) => {
          console.log(action.payload)

         if(action.payload===false){
            state.Erreur ="email or password wrong"
         }else {
            state.psychiatre= action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
            localStorage.setItem("userType", "psy");
           };
          state.status = "Success";
        },
        [checkPsy.rejected] : (state, action) =>{
            state.Erreur = action.payload
            state.status = "Rejected"
        },
        [checkPsy.pending] : (state)=>{
            state.status = "Pending"
        },
        [GetPsychiatreList.fulfilled] : (state, action)=>{
            state.psychiatre = action.payload;
            console.log(action.payload)
            state.status = "Success";
        },
        [GetPsychiatreList.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [GetPsychiatreList.pending] : (state) =>{
           state.status = "Pending"
        },
        [updateProfilePsy.fulfilled] : (state, action)=>{
          state.psychiatre = action.payload;
          state.status = "Success";
        },
        [updateProfilePsy.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [updateProfilePsy.pending] : (state) =>{
         state.status = "Pending"
        },
       }
  });

  export default PsyApplySlice.reducer;
