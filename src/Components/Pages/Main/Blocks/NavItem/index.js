import React from 'react'
import './styles.less'

export const NavItem = ({ icon, logo, title, selected }) => (
  <div className={selected ? 'mobile-nav-item selected' : 'mobile-nav-item'}>
    <div className="icon-container">
      <i className={icon} />
    </div>
    <span className={logo ? 'title logo' : 'title'}>{title}</span>
  </div>
)
