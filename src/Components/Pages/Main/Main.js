import React, { PureComponent } from 'react'
import { Map as GoogleMap, Marker } from 'google-maps-react'
import _ from 'lodash'
import position from 'Configs/position'
import * as routes from 'Constants/routes'
import { NavBar, IconButton } from './Blocks'
import './styles.less'

export default class Main extends PureComponent {
  state = {
    isMarkersShown: true,
    isSaveShown: false,
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
    const { userMarkers, onSaveMarkers } = this.props

    const newMarkers =
      userMarkers &&
      userMarkers.filter(marker => marker.isLocal).map(marker => marker.coords)

    onSaveMarkers(newMarkers)
  }

  handleInfoClick = () => {
    const { history } = this.props

    history.push(routes.about)
  }

  renderMarkers = () => {
    return [...this.renderPlaceMarkers(), ...this.renderUserMarkers()]
  }

  renderPlaceMarkers = () => {
    const { currentPlace } = this.state
    const { placeMarkers } = this.props

    if (!currentPlace) {
      return []
    }

    return placeMarkers.map((marker, i) => (
      <Marker key={`place_${i}`} position={marker.coords} />
    ))
  }

  renderUserMarkers = () => {
    const { userMarkers } = this.props

    return userMarkers.map((marker, i) => (
      <Marker key={`user_${i}`} position={marker.coords} />
    ))
  }

  render() {
    const { isMarkersShown, currentPlace } = this.state
    const { google, userMarkers, onLogOut } = this.props

    const isSaveShown = _.find(userMarkers, marker => marker.isLocal)

    return (
      <div className="main-page-container">
        <NavBar
          currentPlace={currentPlace}
          onInfoClick={this.handleInfoClick}
          onLogOut={onLogOut}
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
          {isSaveShown && (
            <IconButton
              icon="fas fa-save"
              title="Save"
              onClick={this.handleSave}
            />
          )}
        </div>
      </div>
    )
  }
}
