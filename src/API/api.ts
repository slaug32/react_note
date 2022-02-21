import axios from "axios";
import { ServerPostsType } from "../types/types";

export default class PostsAPI {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get<ServerPostsType>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
}
