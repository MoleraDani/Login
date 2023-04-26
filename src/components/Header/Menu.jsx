import React from 'react'
import { Link } from 'react-router-dom'
import { Top25Link } from './Top25Link'
import { FilterGenders } from './FilterGender'

export function Menu() {
  return (
    <nav>
      <Top25Link />
      <FilterGenders />
      <Link to={'/favorites'}>Favoritos</Link>
      <Link to='/aboutUs'>Sobre nosotros</Link>
    </nav>
  )
}
