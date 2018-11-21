import { connect } from 'react-redux'
import { GoogleApiWrapper } from 'google-maps-react'
import { createStructuredSelector } from 'reselect'
import { GOOGLE_API_KEY } from 'Configs/googleApi'
import { getPlaces } from 'Redux/actions/map'
import { createMarker } from 'Redux/actions/user'
import { getPlaceMarkers } from 'Redux/selectors/map'
import { getUserMarkers } from 'Redux/selectors/user'
import Component from './Main'

const selector = createStructuredSelector({
  placeMarkers: getPlaceMarkers,
  userMarkers: getUserMarkers
})

const actions = {
  onGetPlaces: getPlaces,
  onCreateMarker: createMarker
}

const Connected = connect(
  selector,
  actions
)(Component)

export const Main = GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(Connected)
