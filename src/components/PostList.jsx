import PostItem from "./PostItem";

const PostList = ({ posts, postDelete }) => {
  if (!posts.length) {
    return (
      <strong style={{ textAlign: "center", color: "red" }}>
        Записи не найдены
      </strong>
    );
  }

  return (
    <div>
      {" "}
      <strong>Список Постов</strong>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          post={post}
          key={post.id}
          postDelete={postDelete}
        />
      ))}
    </div>
  );
};

export default PostList;
