import React from "react";
import PostsAPI from "./API/api";
import FilterComponent from "./components/FilterComponent";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/MyButton/MyButton";
import { usePosts } from "./hooks/usePost";
import "./styles/App.css";
import loader from "./images/preloader.gif";
import { getPageArray, getPageCount } from "./utils/pages";
import { useFetching } from "./hooks/useFething";

const App = () => {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({ sort: "", search: "" });
  const [totalPages, setTotalPages] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const sortedAndSoarchedPosts = usePosts(posts, filter.sort, filter.search);

  let pagesArray = getPageArray(totalPages);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostsAPI.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  React.useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePost = (page) => {
    setPage(page);
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <br />
      <FilterComponent setFilter={setFilter} filter={filter} />
      {postError && <div>Error ${postError}</div>}
      {isPostLoading ? (
        <img style={{ width: "100px", borderRadius: "100%" }} src={loader} />
      ) : (
        <PostList posts={sortedAndSoarchedPosts} postDelete={removePost} />
      )}
      {pagesArray.map((p) => (
        <MyButton onClick={() => changePost(p)} key={p}>
          {p}
        </MyButton>
      ))}
    </div>
  );
};

export default App;
