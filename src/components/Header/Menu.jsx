import React from 'react'
import { Link } from 'react-router-dom'
import { Top25Link } from './Top25Link'
import { FilterGenders } from './FilterGender'
import { Inicio } from './Inicio'

export function Menu() {
  return (
    <nav>
      <Inicio />
      <Top25Link />
      <FilterGenders />
      <Link to={'/favorites'}>Favoritos</Link>
      <Link to='/aboutUs'>Sobre nosotros</Link>
    </nav>
  )
}
