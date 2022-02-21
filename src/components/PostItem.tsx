import { NewPostType } from "../types/types";
import MyButton from "./UI/MyButton/MyButton";

type PostsType = {
  post: NewPostType;
  number: number;
  postDelete: (post: NewPostType) => void;
};

const PostItem: React.FC<PostsType> = ({ post, number, postDelete }) => {
  return (
    <div className='post'>
      <div className='post_content'>
        <strong>
          {number}.{post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className='post_btn'>
        <MyButton onClick={() => postDelete(post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
