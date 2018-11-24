import React from 'react'
import * as placesTypes from 'Constants/mapObjectTypes'
import './styles.less'
import { NavItem } from '../NavItem'
import { TitledIcon } from '../TitledIcon'

export default ({ currentPlace, onNavItemClick, onInfoClick, onLogOut }) => (
  <nav>
    <div className="upper">
      <TitledIcon icon="fas fa-map" logo title="Mapster" />
      <div className="nav-items" />
      <div className="right-buttons">
        <i
          className="fas fa-question-circle info-button"
          onClick={onInfoClick}
        />
        <TitledIcon
          icon="fas fa-sign-out-alt"
          title="Sign out"
          onClick={onLogOut}
        />
      </div>
    </div>
    <div className="mobile-items">
      <NavItem
        icon="fas fa-wine-bottle"
        selected={placesTypes.pharmacy === currentPlace}
        title="pharmacies"
        onClick={() => onNavItemClick(placesTypes.pharmacy)}
      />
      <div className="divider" />
      <NavItem
        icon="fas fa-gas-pump"
        selected={placesTypes.gasStation === currentPlace}
        title="gas stations"
        onClick={() => onNavItemClick(placesTypes.gasStation)}
      />
      <div className="divider" />
      <NavItem
        icon="fas fa-school"
        selected={placesTypes.school === currentPlace}
        title="schools"
        onClick={() => onNavItemClick(placesTypes.school)}
      />
      <div className="divider" />
      <NavItem
        icon="fas fa-utensils"
        selected={placesTypes.restaurant === currentPlace}
        title="restaurants"
        onClick={() => onNavItemClick(placesTypes.restaurant)}
      />
    </div>
  </nav>
)
