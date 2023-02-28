import React from "react";

function Post({ image, content, user }){
    return <> 
        {image && 
            <img 
                style={{ height:100, width:200, objectFit:'cover' }}
                src={URL.createObjectURL(image)}
                alt="Post Cover"
                />
        }
        <p>{content}</p>
        <div>{user}</div>
    </>
};

export default Post;