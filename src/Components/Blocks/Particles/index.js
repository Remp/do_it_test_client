import React from 'react'
import ParticlesJS from 'react-particles-js'
import particlesConfig from './particlesConfig'
import './styles.less'

export const Particles = () => (
  <ParticlesJS className="own-particles-wrapper" params={particlesConfig} />
)
