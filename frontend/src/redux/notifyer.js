import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotif = createAsyncThunk("Notification/getNotif", async({psychiatre_id})=>{
    return axios.get(`http://localhost:9000/GetNotif/${psychiatre_id}`)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })
export const SendNotif = createAsyncThunk("Notification/SenNotif",async({Notif})=>{
    return axios.post(`http://localhost:9000/SendNotif`,Notif)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
})
export const DLTNotif= createAsyncThunk("Notification/DLTNotif", async ({id})=>{
  return axios.delete(`http://localhost:9000/deletNotif/${id}`,)
  .then(res => {return res.data})
  .catch(err => {return err.data.message})
})



  const NotifSlice = createSlice({
    name: "Notification",
    initialState :  {
        Notification : [],
         status: "",
         Erreur: "",
       },
       extraReducers: {
        
        [getNotif.fulfilled] : (state, action)=>{
          
          state.Notification = { 
            notifications: action.payload.notifications, 
            users: action.payload.users 
          };
          console.log(action.payload.notifications)
          console.log(action.payload.users)
          state.status = "Success";
        },
        [getNotif.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [getNotif.pending] : (state) =>{
           state.status = "Pending"
        },
        [SendNotif.fulfilled] : (state, action)=>{
          state.Notification = [...state.Notification, action.payload];
            state.status = "Success";
        },
        [SendNotif.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [SendNotif.pending] : (state) =>{
           state.status = "Pending"
        },
        [DLTNotif.fulfilled]: (state, action) => {
          state.Notification = [...state.Notification.filter(item=>item._id !== action.payload)];
         
          state.status = "Success";
        },
        [DLTNotif.rejected] : (state, action) =>{
            state.Erreur = action.payload
            state.status = "Rejected"
        },
        [DLTNotif.pending] : (state)=>{
            state.status = "Pending"
        },
        
    }
  });

  export default NotifSlice.reducer;
