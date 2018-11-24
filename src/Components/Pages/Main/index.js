import { connect } from 'react-redux'
import { GoogleApiWrapper } from 'google-maps-react'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { GOOGLE_API_KEY } from 'Configs/googleApi'
import { getPlaces } from 'Redux/actions/map'
import { createMarker, saveMarkers } from 'Redux/actions/user'
import { logOut } from 'Redux/actions/auth'
import { getPlaceMarkers } from 'Redux/selectors/map'
import { getUserMarkers } from 'Redux/selectors/user'
import Component from './Main'

const selector = createStructuredSelector({
  placeMarkers: getPlaceMarkers,
  userMarkers: getUserMarkers
})

const actions = {
  onGetPlaces: getPlaces,
  onCreateMarker: createMarker,
  onSaveMarkers: saveMarkers,
  onLogOut: logOut
}

const Connected = connect(
  selector,
  actions
)(Component)

export const Main = withRouter(
  GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY
  })(Connected)
)
