import React from "react";

export const useSortedPost = (posts, sort) => {
  const sortedPosts = React.useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = (posts, sort, search) => {
  const sortedPosts = useSortedPost(posts, sort);
  const sortedAndSoarchedPosts = React.useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortedPosts]);
  return sortedAndSoarchedPosts;
};
