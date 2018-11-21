import React from 'react'
import './styles.less'

export const IconButton = ({ icon, title, isLoading, onClick }) => (
  <div className="icon-button-container" onClick={onClick}>
    <i className={isLoading ? `icon loading ${icon}` : `icon ${icon}`} />
    <span className="title">{title}</span>
  </div>
)
