import React from 'react'
import Input from 'antd/lib/input/Input'
import 'antd/lib/input/style/css'
import './styles.less'

export const AuthInput = ({
  name,
  addonBefore,
  placeholder,
  size,
  value,
  onBlur,
  onChange
}) => (
  <div className="auth-input-wrapper">
    <Input
      addonBefore={addonBefore}
      name={name}
      placeholder={placeholder}
      size={size}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  </div>
)
