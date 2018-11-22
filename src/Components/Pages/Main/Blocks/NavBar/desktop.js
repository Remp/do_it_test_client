import React from 'react'
import * as placesTypes from 'Constants/mapObjectTypes'
import './styles.less'
import { NavItem } from '../NavItem'
import { TitledIcon } from '../TitledIcon'

export default ({ currentPlace, onNavItemClick, onInfoClick }) => (
  <nav>
    <div className="upper">
      <TitledIcon icon="fas fa-map" logo title="Mapster" />
      <div className="nav-items">
        <NavItem
          icon="fas fa-wine-bottle"
          selected={placesTypes.pharmacy === currentPlace}
          title="pharmacies"
          onClick={() => onNavItemClick(placesTypes.pharmacy)}
        />
        <NavItem
          icon="fas fa-gas-pump"
          selected={placesTypes.gasStation === currentPlace}
          title="gas stations"
          onClick={() => onNavItemClick(placesTypes.gasStation)}
        />
        <NavItem
          icon="fas fa-school"
          selected={placesTypes.school === currentPlace}
          title="schools"
          onClick={() => onNavItemClick(placesTypes.school)}
        />
        <NavItem
          icon="fas fa-utensils"
          selected={placesTypes.restaurant === currentPlace}
          title="restaurants"
          onClick={() => onNavItemClick(placesTypes.restaurant)}
        />
      </div>
      <div className="right-buttons">
        <i
          className="fas fa-question-circle info-button"
          onClick={onInfoClick}
        />
        <TitledIcon icon="fas fa-sign-out-alt" title="Sign out" />
      </div>
    </div>
  </nav>
)
