import React, { PureComponent } from 'react'
import { Map as GoogleMap, Marker } from 'google-maps-react'
import { IconButton } from 'Components/Blocks'
import './styles.less'

export default class Map extends PureComponent {
  state = {
    zoom: 14
  }

  handleZoomIn = () => {
    this.setState({ zoom: this.state.zoom + 1 })
  }

  handleZoomOut = () => {
    const { zoom } = this.state

    this.setState({ zoom: zoom > 0 ? zoom + 1 : 0 })
  }

  renderMarkers = () => {
    const { markers } = this.props

    return markers && markers.map(marker => <Marker position={marker} />)
  }

  render() {
    const { zoom } = this.state
    const { google, onFetch, onMapClick, onSave } = this.props

    return (
      <div className="map-container">
        <GoogleMap
          google={google}
          // style={{
          //   height: window.screen.height - 80 + 'px',
          //   position: 'relative'
          // }}
          zoom={zoom}
          onClick={onMapClick}
        >
          {this.renderMarkers()}
        </GoogleMap>
        <div className="button-container">
          <IconButton
            icon="fas fa-sync"
            isLoading
            title="Fetch"
            onClick={onFetch}
          />
          <IconButton icon="fas fa-save" title="Save" onClick={onSave} />
        </div>
      </div>
    )
  }
}
