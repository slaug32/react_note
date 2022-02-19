import React from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/MyButton";
import MyInput from "./components/UI/MyInput";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "zagalov", body: "text" },
    { id: 2, title: "zagalov1", body: "text1" },
    { id: 3, title: "zagalov2", body: "text2" },
    { id: 4, title: "zagalov3", body: "text3" },
  ]);
  const [post, setPost] = React.useState({ title: "", body: "" });

  const addNewPost = (event) => {
    event.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className='App'>
      <form>
        <MyInput
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
          type='text'
          placeholder='Название поста...'
        />
        <MyInput
          value={post.body}
          onChange={(event) => setPost({ ...post, body: event.target.value })}
          type='text'
          placeholder='Описание поста...'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} />
    </div>
  );
};

export default App;
