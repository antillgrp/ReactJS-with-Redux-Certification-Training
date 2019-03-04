import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ value, onChange, options }) => (
  <span style={{textAlign:"center"}}>
    <h1>API Fetching React-Redux APP</h1>
    <h3 >
      Queries the latest properly answered <strong>StackOverFlow</strong> questions with the tag: <big style={{color:"red"}}>{value}</big> showing the answer(s).
    </h3>
    <select
      style={{fontSize:'30px'}}
      onChange={e => onChange(e.target.value)}
      value={value}

    >
      {options.map(option =>
        <option value={option} key={option}>
          {option}
        </option>)
      }
    </select>
  </span>
)

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker
