export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_TAG = 'SELECT_TAG'
export const INVALIDATE_TAG = 'INVALIDATE_TAG'

export const selectTag = tag => ({
  type: SELECT_TAG,
  tag
})

export const invalidateTag = tag => ({
  type: INVALIDATE_TAG,
  tag
})

export const requestPosts = tag => ({
  type: REQUEST_POSTS,
  tag
})

export const receivePosts = (tag, json) => ({
  type: RECEIVE_POSTS,
  tag,
  posts: json.items.filter(item => item.is_answered),
  receivedAt: Date.now()
})

const fetchPosts = tag => dispatch => {
  dispatch(requestPosts(tag))
  //return fetch(`https://www.reddit.com/r/${reddit}.json`)
  return fetch(`https://api.stackexchange.com/2.2/questions?tagged=${tag}&site=stackoverflow&fromdate=1546300800&sort=creation&order=desc&filter=!-NA3i5wYzA_cOLTjgl1AVAdr0j2ne8p7H`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(tag, json)))
}

const shouldFetchPosts = (state, tag) => {
  const posts = state.postsByTag[tag]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = tag => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), tag)) {
    return dispatch(fetchPosts(tag))
  }
}
