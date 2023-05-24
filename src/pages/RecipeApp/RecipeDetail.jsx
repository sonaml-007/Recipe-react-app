import React, { useEffect } from 'react'
import { getMealDetails } from '../../apis/recipe';
import { useParams } from 'react-router-dom';

export default function RecipeDetail() {
    const[recipeDetail,setRecipeDetail]=React.useState('')
    const{id}=useParams() //brings query parameter from url; from router dome; hook
    useEffect(()=>{
        getDetail();
    },[]);
    const getDetail=()=>{
        getMealDetails(id).then((res) => {
            setRecipeDetail(res)
        })
    }

  return (
    <div>
    {recipeDetail?.strMeal}
    <br />
{recipeDetail?.strInstructions}
    </div>
  )
}
