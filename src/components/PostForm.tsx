import React from "react";
import { NewPostType } from "../types/types";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";



type PropsType = {
  create: (newPost: NewPostType) => void;
};

const PostForm: React.FC<PropsType> = ({ create }) => {
  const [post, setPost] = React.useState({ title: "", body: "" });

  const addNewPost = (event: any) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        // @ts-ignore
        value={post.title}
        onChange={(event: any) =>
          setPost({ ...post, title: event.target.value })
        }
        type='text'
        placeholder='Название поста...'
      />
      <MyInput
        // @ts-ignore
        value={post.body}
        onChange={(event: any) =>
          setPost({ ...post, body: event.target.value })
        }
        type='text'
        placeholder='Описание поста...'
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
