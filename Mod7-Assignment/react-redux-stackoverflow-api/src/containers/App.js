import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectTag, fetchPostsIfNeeded, invalidateTag } from '../actions'
import Picker from '../components/Picker'
//import Posts from '../components/Posts'
import QuestionAnswer from '../components/QuestionAnswer'

class App extends Component {
  static propTypes = {
    selectedTag: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedTag } = this.props
    dispatch(fetchPostsIfNeeded(selectedTag))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTag !== this.props.selectedTag) {
      const { dispatch, selectedTag } = nextProps
      dispatch(fetchPostsIfNeeded(selectedTag))
    }
  }

  handleChange = nextTag => {
    this.props.dispatch(selectTag(nextTag))
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedTag } = this.props
    dispatch(invalidateTag(selectedTag))
    dispatch(fetchPostsIfNeeded(selectedTag))
  }

  render() {
    const { selectedTag, posts, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker value={selectedTag}
                onChange={this.handleChange}
                options={[ 'react', 'redux' ]} />
        <p>
          {lastUpdated &&
            <span>
              Last Modified at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            /*<a href="#"
              onClick={this.handleRefreshClick}>
              Refresh
            </a>*/
            <button onClick={this.handleRefreshClick}>Refresh </button>
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <QuestionAnswer entries={posts} />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedTag, postsByTag } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByTag[selectedTag] || {
    isFetching: true,
    items: []
  }

  return {
    selectedTag,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
