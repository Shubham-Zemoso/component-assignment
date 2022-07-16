import { TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'

const SearchBar = () => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    };
  
    return (
    <div>
        <TextField onChange={handleChange}>

        </TextField>
    </div>
  )
}

export default SearchBar