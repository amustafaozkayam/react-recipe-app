import React from 'react'
import { RecipeCard, RecipeHeader, RecipeImage, Button } from './HomeStyles'
import defaultImage from '../../assets/default-image.jpg'
import { useNavigate } from 'react-router-dom'

const RecipeCardComp = ({recipe}) => {

  let navigate = useNavigate()
  const handleClick = () => {
    navigate('/details',{state:{recipe}})
  }


  return (
    <div>
      <RecipeCard>
        <RecipeHeader>{recipe.label}</RecipeHeader>
          <RecipeImage src={recipe.image || defaultImage}/>
          <Button onClick={handleClick}>View Recipe</Button>
      </RecipeCard>
        </div>
  )
}

export default RecipeCardComp

