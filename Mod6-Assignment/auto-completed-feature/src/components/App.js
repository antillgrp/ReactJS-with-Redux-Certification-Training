import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class App extends React.Component {

  state = {
    list: <VisibleTodoList />,
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        list: null,
      })
      this.setState({
        list: <VisibleTodoList />,
      })
    }, 1000*15)
  }
  render () {
    return (
      <div>
        <AddTodo />
        {this.state.list}
        <Footer />
      </div>
    )
  }
}