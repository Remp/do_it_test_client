import React, { PureComponent } from 'react'
import ParticlesJS from 'react-particles-js'
import particlesConfig from './particlesConfig'
import './styles.less'

export class Particles extends PureComponent {
  render() {
    return (
      <ParticlesJS className="own-particles-wrapper" params={particlesConfig} />
    )
  }
}
