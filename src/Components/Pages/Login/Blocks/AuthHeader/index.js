import React from 'react'
import './styles.less'

export const AuthHeader = ({ icon, title }) => (
  <div className="auth-header">
    <i className={`icon ${icon}`} />
    <div className="title">{title}</div>
  </div>
)
