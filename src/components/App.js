import React, { useState, useEffect} from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'
import uuidv4 from 'uuid/v4'
import RecipeEdit from './RecipeEdit';
export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'
const LOCAL_STORAGE_SEARCH_KEY = 'cookingWithReact.search'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [searchFilter, setSearchFilter] = useState (() => { 
    const searchJSON = localStorage.getItem(LOCAL_STORAGE_SEARCH_KEY)
    if (searchJSON == null) {
      return ''
    } else {
      console.log(JSON.parse(searchJSON))
      return JSON.parse(searchJSON)
    }
  })

  const [recipes, setRecipes] = useState(() => { 
  const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (recipeJSON == null) {
      return sampleRecipes
    } else {
        return JSON.parse(recipeJSON)
    }
  })

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchFilter.toLowerCase()))

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
  }, [recipes])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH_KEY,JSON.stringify(searchFilter))
  }, [searchFilter])


  
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
    handleRecipeSearch
  }
  function handleRecipeSearch (text) {
    setSearchFilter(text)
  }
  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '' }
      ],
      cooks: [
        { id: uuidv4(), name: 'Name' }
      ]
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeChange (id, recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id)
    setSelectedRecipeId(undefined)
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

 

  return (
    <RecipeContext.Provider value={recipeContextValue}>
    
      <RecipeList recipes={searchFilter && searchFilter !== ""?  filteredRecipes :recipes}/>
      {selectedRecipe &&<RecipeEdit recipe = {selectedRecipe}/>}
    </RecipeContext.Provider>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ],
    cooks: [
      {
        id: 2,
        fname: 'Patricia',
        lname: 'Bidou' 

      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ],
    cooks: [
      {
        id: 1,
        fname: 'Isabelle',
        lname: 'Bidou' 
      }
      
    ]
  }
]

export default App;
