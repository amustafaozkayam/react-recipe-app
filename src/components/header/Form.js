
import React from 'react'
import { FoodInput, FormContainer, Button, Select } from './HeaderStyles'

const Form = ({setQuery, setMeal, getData, mealTypes}) => {
const handleSubmit = (e) => {
  e.preventDefault();
  getData();
}
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput onChange={(e)=> setQuery(e.target.value)} type="text" placeholder="food" />
      <Button type='submit'>Search</Button> 
      <Select onChange={(e)=> setMeal(e.target.value)} name='mealTypes id='mealTypes>
        {mealTypes.map((item, index)=>(
          <option key={index} value={item.toLowerCase()}>{item}</option>
        ))}
      </Select>

    </FormContainer>
  
    
  )
}

export default Form