import React from "react";
import { PostContext } from "../App";

function CreatePost({ user }){
    const { dispatch } = React.useContext(PostContext);
    const [content, setContent] = React.useState('');
    const [image, setImage] = React.useState('');
    const imageInputRef = React.useRef(null);

    function handlePostSubmit(event){
        event.preventDefault();
        const post = {content, image, user, id: Date.now()};
        dispatch({ type: "ADD_POST", payload: { post } });
        setContent("");
        imageInputRef.current.value = "";
    }

    return (
        <>
            <h2>Create New Post</h2>
            <form onSubmit={handlePostSubmit}>
                <input
                    type="text"
                    placeholder="Add Post Content"
                    onChange={(event) => setContent(event.target.value)}
                    value={content}
                />
                <input
                    type="file"
                    onChange={(event) => setImage(event.target.files[0])}
                    ref={imageInputRef}
                />
                <button type="submit">Submit Post</button>
            </form>
        </>
    );
};

export default CreatePost;