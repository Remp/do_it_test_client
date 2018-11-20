import React from 'react'
import './styles.less'
import { NavItem } from '../NavItem'
import { TitledIcon } from '../TitledIcon'

export default () => (
  <nav>
    <div className="upper">
      <TitledIcon icon="fas fa-map" logo title="Mapster" />
      <div className="nav-items">
        <NavItem icon="fas fa-wine-bottle" selected title="pharmacies" />
        <NavItem icon="fas fa-gas-pump" title="gas stations" />
        <NavItem icon="fas fa-school" title="schools" />
        <NavItem icon="fas fa-utensils" title="restaurants" />
      </div>
      <TitledIcon icon="fas fa-sign-out-alt" title="Sign out" />
    </div>
  </nav>
)
