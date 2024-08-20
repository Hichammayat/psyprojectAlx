const PostModel = require("../modules/Post");
const fs = require('fs');

exports.newPost = async (req, res) => {
  const blog = req.body;

  const image = req.files.image;
  console.log(blog);
  try {
    const imageName = blog.title;

    const blogFolderPath = `./uploads/blogs/${imageName}/`;
    if (!fs.existsSync(blogFolderPath)) {
      fs.mkdirSync(blogFolderPath, { recursive: true });
    }
    const imagePathAtback = `${blogFolderPath}${image.name}`;
    const imagePath = `${image.name}`;
    await image.mv(imagePathAtback);
    blog.photo = imagePath;
    const newBlog = new PostModel({ ...blog, photo: imagePath });
    const saved = await newBlog.save();
    console.log(saved);
    if (saved) res.send(saved);
    else res.send("post not inserted");
  } catch (err) {
    console.error(err);
  }
};

exports.displayPost= async(req,res)=>{
    const id =req.params.psychiatre_id
    try{
    const BlogPsyid = await PostModel.find({psychiatre_id : id})
    console.log(BlogPsyid)
        res.send(BlogPsyid)
    }catch(err){console.log(err.message)}

    
}
exports.displayAllpost= async(req,res)=>{
    try{
        const allPosts = await PostModel.find();
        console.log(allPosts);
        res.send(allPosts);
    } catch(err){
        console.log(err.message);
    }
}
exports.getPostDetails= async(req,res)=>{
    const postId = req.params.id;
  try {
    const post = await PostModel.findById(postId);
    console.log(post);
    res.send( post );
  } catch (err) {
    console.log(err.message);
    
  }
}
exports.deletPost =async(req,res)=>{
    const Post_id = req.params._id
    
  
    try {
        
            let DLT = await PostModel.deleteOne({_id: Post_id})
              console.log(DLT)
  
            res.send(Post_id)
        
    } catch (error) {console.error(error)
        
    }
  }
