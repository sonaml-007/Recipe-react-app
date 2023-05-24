import axios from 'axios';
export function getAllRecipes(category){
    return new Promise((resolve,reject)=>{
        axios({
            method: 'get',
            url:`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        }).then((resp) => {
            resolve(resp.data.meals)
        })
    })
}
export function getAllRecipeCategories(){
    return new Promise((resolve,reject)=>{
        axios({
            method:'get',
            url:'https://www.themealdb.com/api/json/v1/1/categories.php'
        }).then((resp) => {
            console.log(resp.data.categories)
            resolve(resp.data.categories)
        })
    })
}
export function getMealDetails(mealID){
return new Promise((resolve,reject)=>{
    axios({
        method:'get',
        url:`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    }).then(res=>{
        resolve(res?.data?.meals?.[0]) //Could return all the array so we do this chaining to return the 0th item.
    })
})
}
