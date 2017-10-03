import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const URL = 'http://reduxblog.herokuapp.com/api/'
const KEY = '?key=AnyRandomkey'
export function fetchPosts() {

  const request = axios.get(`${URL}/posts${KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
