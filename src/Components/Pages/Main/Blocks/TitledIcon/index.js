import React from 'react'
import './styles.less'

export const TitledIcon = ({ icon, logo, title, onClick }) => (
  <div className="titled-icon" onClick={onClick}>
    <div className="icon-container">
      <i className={icon} />
    </div>
    <span className="title" style={{ fontFamily: logo && 'Lobster Two' }}>
      {title}
    </span>
  </div>
)
