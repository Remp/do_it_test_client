import React from 'react'
import './styles.less'

export const NavItem = ({ icon, logo, title, selected, onClick }) => (
  <div
    className={selected ? 'mobile-nav-item selected' : 'mobile-nav-item'}
    onClick={onClick}
  >
    <div className="icon-container">
      <i className={icon} />
    </div>
    <span className={logo ? 'title logo' : 'title'}>{title}</span>
  </div>
)
