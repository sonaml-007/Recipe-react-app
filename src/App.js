import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import Gallery from './pages/Gallery/Gallery'
import Home from './pages/Home/Home'
import Header from './components/header/Header'
import Recipes from './pages/RecipeApp/Recipe'
import RecipeDetail from './pages/RecipeApp/RecipeDetail'

export default function App() {
  return (
    <>
      <Header />
      <div style={{ padding: 10 }}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/recipes'} element={<Recipes />} />
          <Route path={'/getAllRecipes'}element={<getAllRecipes />}/>
          <Route path={'/recipe/:id'}element={<RecipeDetail/>}/>
        </Routes>
      </div>
    </>
  )
}