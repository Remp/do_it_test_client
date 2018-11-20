import React, { PureComponent } from 'react'
import Media from 'react-media'
import './styles.less'
import MobileLayout from './mobile'
import DesktopLayout from './desktop'

export class NavBar extends PureComponent {
  render() {
    return (
      <Media query="(max-width: 992px)">
        {match => (match ? <MobileLayout /> : <DesktopLayout />)}
      </Media>
    )
  }
}
