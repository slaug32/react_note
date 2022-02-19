import React from "react";

// type PostType = {
//   id: number;
//   title: string;
//   body: string;
// };

// export type PostsPropsType = {
//   post: PostType;
// };: React.FC<PostsPropsType>

const PostItem = ({ post, number }) => {
  return (
    <div className='post'>
      <div className='post_content'>
        <strong>
          {number}.{post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className='post_btn'>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
