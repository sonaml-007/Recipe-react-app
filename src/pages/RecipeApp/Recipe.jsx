
import { getAllRecipeCategories, getAllRecipes } from '../../apis/recipe'
import styles from './Recipe.module.css'
import React, { useEffect } from 'react'
import {
  getAllRecipeCatgeories,
} from '../../apis/recipe'
import RecipeCard from '../../components/cards/RecipeCard'
import { Link } from 'react-router-dom'

export default function Recipes() {
  const [categories, setCategories] = React.useState([])
  const [selectedCategory, setSelectedCategory] = React.useState('Chicken')
  const [meals, setMeals] = React.useState([])

  useEffect(() => {
    getRecipeCategories()
    getMealsByCategory()
  }, [selectedCategory])
  const getRecipeCategories = () => {
    getAllRecipeCategories().then((res) => {
      setCategories(res)
    })
  }
  const getMealsByCategory = () => {
    getAllRecipes(selectedCategory).then((res) => {
      setMeals(res)
    })
  }
  return (
    <>
      <div className={styles.categoriesWrapper}>
        {categories?.length > 0 &&      //Chaining of Categories; prevents further running of code if array = null
          categories?.map((category) => (
            <div style={{
              background:selectedCategory===category.strCategory?"blue":'',
            color:selectedCategory===category.strCategory?"White":''}} 
            onClick={()=>{
              setSelectedCategory(category.strCategory);
            }} className={styles.categoryItem} key={category.idCategory}>
              {category?.strCategory}
            </div>
          ))}
      </div>
      <div className={styles.recipeCardsWrapper}>
        {meals?.map((recipe) => (
          <Link
          to={`/recipe/${recipe.idMeal}`}
          className={styles.recipeCardsWrapper}
          key={recipe.idMeal}
          >
            <RecipeCard recipe={recipe}/>
          </Link>
            
        ))}
      </div>
    </>
      )
      
}