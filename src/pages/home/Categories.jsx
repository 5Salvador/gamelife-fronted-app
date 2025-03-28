import React from 'react'
import { Link } from 'react-router-dom'
import category1 from "../../assets/PS5-controller.jpeg"
import category2 from "../../assets/PS5-Games.jpeg"
import category3 from "../../assets/Desktop-Games.jpeg"
import category4 from "../../assets/Gaming-Headphone.jpeg"


const Categories = () => {
  const categories = [
    {
      name: "Accessories",
      path: 'accessories',
      image: category1
    },
    {
      name: "PS Games",
      path:'games',
      image: category2
    },
    {
      name: "PC games",
      path: 'pc games',
      image: category3
    },
    {
      name: "Headphones",
      path:'headphones',
      image: category4
    }
  ]
  return (
    <>
    <div className='product__grid'>
      {
        categories.map((category) => (
          <Link key={category.name} to={`/categories/${category.path}`} className='categories__card'>
            <img src={category.image} alt={category.name} className=''/>
            <h4>{category.name}</h4>
          </Link>
        ))
      }

    </div>
    </>
  )
}

export default Categories