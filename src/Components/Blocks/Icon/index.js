import React from 'react'

export const Icon = ({ name, color, size }) => (
  <i
    className={name}
    style={{
      color,
      fontSize: size
    }}
  />
)
