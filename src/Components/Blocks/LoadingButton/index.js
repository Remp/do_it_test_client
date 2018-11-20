import React from 'react'
import * as colors from 'Theme/colors'
import './styles.less'

export const LoadingButton = ({ disabled, isLoading, title, onClick }) => (
  <div
    className="loading-button-container"
    style={{
      backgroundColor: disabled || isLoading ? colors.dark : colors.green
    }}
    onClick={onClick}
  >
    <div className="title">{title}</div>
    <div className="loader-container">
      <div
        className="loader"
        style={{
          borderBottomColor: isLoading ? 'white' : 'transparent',
          borderLeftColor: isLoading ? 'white' : 'transparent'
        }}
      />
    </div>
  </div>
)
