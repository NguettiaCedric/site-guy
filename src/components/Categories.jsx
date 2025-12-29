import React from 'react'
import { categories } from '../data/categories'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <ul className="list-unstyled inner_category">
      {categories.map((category, index) => (
        <li key={index}>
          <Link className="d-flex align-items-center justify-content-between" to="#">
            {category.name} <span className="flex-shrink-0">({category.count})</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Categories
