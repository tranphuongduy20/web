import React, { useState } from 'react'
import { TextField } from '@mui/material'

const MAX_LENGTH = 10

const NumberField = (props) => {
  const [value, setValue] = useState('0')
  const maxLength = props.maxLength || MAX_LENGTH

  const handleInputChange = (e) => {
    const val = e.target.value
    if (val === '') {
      setValue(0)
      return
    }

    if (val.length >= maxLength || !parseInt(val)) return
    setValue(parseInt(val))

    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <TextField {...props} value={value} onChange={handleInputChange} />
  )
}

export default NumberField
