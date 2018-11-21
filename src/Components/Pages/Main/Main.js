import React, { PureComponent } from 'react'
import { NavBar, Map } from './Blocks'
import './styles.less'

export default class Main extends PureComponent {
  render() {
    return (
      <div className="main-page-container">
        <NavBar />
        <Map />
      </div>
    )
  }
}
