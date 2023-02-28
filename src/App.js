import './App.css';
import Login from './components/Login';
import React from 'react';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

const functionsCount = new Set();

function App() {
  const [user, setUser] = React.useState('Anup');
  const [posts, setPosts] = React.useState([]);
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please Login'; 
  }, [user]);

  const handleAddPost = React.useCallback(
    (newPost) => {
    setPosts([newPost, ...posts]);
    }, 
    [posts]
    );
  
  functionsCount.add(handleAddPost);
  console.log(functionsCount);

  if(!user) {
    return <Login setUser={setUser}/>
  } 

  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts} />
      <button onClick={() => setCount(count + 1)}> {count} +</button>
    </>);

}

export default App;