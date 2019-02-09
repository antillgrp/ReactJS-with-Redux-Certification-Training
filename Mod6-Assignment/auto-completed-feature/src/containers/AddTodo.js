import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  
  let input, select, check

  return (
    <div>
      <form 
        onSubmit={
          e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            //alert(input.value+" "+select.value)
            dispatch(addTodo(input.value,select.value))
            input.value = ''
            select.value = Infinity
            select.disabled =!(check.checked = false)
          }
        }
      >
        <fieldset style={{ display:'inline'}}>
          <legend>Add a new task</legend>
          <input
            placeholder={'Task Name'}
            ref={ node => input = node }
          />
          <br/><br/>
          <fieldset>
            <legend>
              <input
                type='checkbox'
                ref={ node => check = node }
                onChange={ e => {
                  select.value = Infinity
                  select.disabled = !e.target.checked
                }}
              />
              Auto Completable
            </legend>
            <label>
              Complete Timer (mins){' '}
              <select  ref={ node => select = node } disabled>
                <option value={Infinity}>-1</option>
                <option value={1}>1</option>
                <option value={3}>3</option>
                <option value={5}>5</option>
              </select>
            </label>
          </fieldset>
          <br/>
          <button type="submit">
            Add Value
          </button>
        </fieldset>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
