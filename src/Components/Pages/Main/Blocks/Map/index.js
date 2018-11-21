import { GoogleApiWrapper } from 'google-maps-react'
import { GOOGLE_API_KEY } from 'Constants/api'
import Container from './Map'

export const Map = GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(Container)
