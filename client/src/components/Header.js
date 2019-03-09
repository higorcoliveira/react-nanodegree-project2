import React from 'react'
import CategoryFilter from './CategoryFilter'

const Header = () => {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-3">Leitura - Um clone do Reddit</h1>
          <CategoryFilter />
        </div>
      </section>
    )
}

export default Header
