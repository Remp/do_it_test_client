import React, { PureComponent } from 'react'
import { Map as GoogleMap, Marker } from 'google-maps-react'
import { IconButton } from 'Components/Blocks'
import position from 'Configs/position'
import { NavBar } from './Blocks'
import './styles.less'

export default class Main extends PureComponent {
  state = {
    isMarkersShown: true,
    currentPlace: null
  }

  handleGetPlaces = type => {
    const { currentPlace } = this.state
    const { onGetPlaces } = this.props

    this.handleChngCurrPlace(type === currentPlace ? null : type)

    if (currentPlace === type) return

    onGetPlaces({
      type,
      location: `${position.lat},${position.lng}`
    })
  }

  handleChngCurrPlace = type => {
    this.setState({
      currentPlace: type
    })
  }

  handleShowMarkers = () => {
    const { isMarkersShown } = this.state

    this.setState({
      isMarkersShown: !isMarkersShown
    })
  }

  handleMapClick = (mapProps, obj, map) => {
    const { onCreateMarker } = this.props

    const lat = map.latLng.lat()
    const lng = map.latLng.lng()

    onCreateMarker({ lat, lng })
  }

  handleSave = () => {
    const { userMarkers } = this.props

    const newMarkers =
      userMarkers && userMarkers.filter(marker => marker.isLocal)
  }

  renderMarkers = () => {
    const { currentPlace } = this.state
    const { placeMarkers, userMarkers } = this.props

    const markersToRender = currentPlace ? placeMarkers : userMarkers

    return (
      markersToRender &&
      markersToRender.map((marker, i) => (
        <Marker key={i} position={marker.coords} />
      ))
    )
  }

  render() {
    const { isMarkersShown, currentPlace } = this.state
    const { google } = this.props

    return (
      <div className="main-page-container">
        <NavBar
          currentPlace={currentPlace}
          onNavItemClick={this.handleGetPlaces}
        />
        <div className="map-container">
          <GoogleMap
            google={google}
            initialCenter={position}
            zoom={14}
            onClick={this.handleMapClick}
          >
            {isMarkersShown && this.renderMarkers()}
          </GoogleMap>
        </div>
        <div className="button-container">
          <IconButton
            icon="fas fa-sun"
            title={isMarkersShown ? 'Hide' : 'Show'}
            onClick={this.handleShowMarkers}
          />
          <IconButton
            icon="fas fa-save"
            title="Save"
            onClick={this.handleSave}
          />
        </div>
      </div>
    )
  }
}
