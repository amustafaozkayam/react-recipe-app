import { useState } from 'react';
import React from 'react'
import Header from '../../components/header/Header'
import axios  from 'axios';
import { HomeImg, ImgDiv, MainContainer } from './HomeStyles';
import homeSvg from '../../assets/home.svg'
import RecipeCardComp  from './RecipeCardComp';


const APP_ID = "ca15b955";
const APP_KEY = "49591fe0e84f16db3929bbff1af5ba33"

const Home = () => {
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const [recipes, setRecipes] = useState();
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if(query){
    const response = await axios(url)
    setRecipes(response.data.hits);

  }
}

  return (
    <div>
      <Header setQuery={setQuery} getData={getData} mealTypes={mealTypes} setMeal={setMeal} />
      {recipes?(
            <MainContainer>
                {recipes.map((recipe, index)=>(
                    <RecipeCardComp key={index} recipe={recipe.recipe}/>
                ))}
            </MainContainer>):(
                <ImgDiv>
                        <HomeImg src={homeSvg} />
                </ImgDiv>
            )
        }
    </div>
  )
}

export default Home