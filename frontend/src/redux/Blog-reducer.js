import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPostid = createAsyncThunk("posts/getPostid", async ({psychiatre_id}) => {
    return axios
      .get(`http://localhost:9000/displayPost/${psychiatre_id}`,)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.data.message;
      });
  });
  export const AddBlog = createAsyncThunk("posts/Add", async ({formData,id}) =>{
    
    return axios.post(`http://localhost:9000/Post/${id}`,formData)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })
  export const getAllposts = createAsyncThunk("posts/getAllposts",async()=>{
    return axios.get(`http://localhost:9000/displayAllpost`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.data.message;
    });
  })

  export const getPostDetail = createAsyncThunk("posts/getPostDetail",async({id})=>{
    return axios.get(`http://localhost:9000/getPostDetails/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.data.message;
    });
  })
  
  export const DLTPost= createAsyncThunk("Post/DLTPost", async ({id})=>{
    return axios.delete(`http://localhost:9000/deletNotif/${id}`,)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })

  const BlogSlice = createSlice({
    name: "Blog",
    initialState :  {
        Blog : [],
         status: "",
         Erreur: "",
       },

       extraReducers: {
        
        [getPostid.fulfilled] : (state, action)=>{
            state.Blog = action.payload;
            state.status = "Success";
        },
        [getPostid.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [getPostid.pending] : (state) =>{
           state.status = "Pending"
        },
        [AddBlog.fulfilled] : (state, action)=>{
            state.Blog = [...state.Blog, action.payload];
            state.status = "Success";
        },
        [AddBlog.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [AddBlog.pending] : (state) =>{
           state.status = "Pending"
        },
        [getAllposts.fulfilled] : (state, action)=>{
          state.Blog = action.payload;
          state.status = "Success";
      },
      [getAllposts.rejected] : (state, action) =>{
        state.Erreur = action.payload
        state.status = "Rejected"
      },
      [getAllposts.pending] : (state) =>{
         state.status = "Pending"
      },
      [DLTPost.fulfilled]: (state, action) => {
        state.Blog = [...state.Blog.filter(item=>item._id !== action.payload)];
       
        state.status = "Success";
      },
      [DLTPost.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
      },
      [DLTPost.pending] : (state)=>{
          state.status = "Pending"
      },
      [getPostDetail.fulfilled] : (state, action)=>{
        state.Blog = action.payload;
        state.status = "Success";
    },
    [getPostDetail.rejected] : (state, action) =>{
      state.Erreur = action.payload
      state.status = "Rejected"
    },
    [getPostDetail.pending] : (state) =>{
       state.status = "Pending"
    },
    }
  });

  export default BlogSlice.reducer;
