import { Subject } from 'rxjs'
import axios from 'axios'
import { toast } from 'react-toastify'
import { api } from 'Configs/app'
import { API_CALL } from '../actions/api'

const sendMethod = HTTPMethod => (HTTPMethod === 'get' ? 'params' : 'data')

const apiCall = (
  url = api.url,
  endpoint = '',
  method = 'GET',
  query = {},
  headers = {}
) => {
  const subject = new Subject()
  const HTTPMethod = method.toLowerCase()

  axios({
    url: `${url}${endpoint}`,
    method: HTTPMethod,
    [sendMethod(HTTPMethod)]: query,
    headers
  })
    .then(payload => {
      if (payload.status >= 400) {
        subject.error(payload.data)
      } else {
        subject.next(payload.data)
      }

      subject.complete()
    })
    .catch(payload => {
      subject.error(payload.data)
      subject.complete()
    })

  return subject
}

export const apiMiddleware = store => next => action => {
  if (action.type !== API_CALL || !action.fields) return next(action)
  const {
    url,
    endpoint,
    headers,
    method,
    query,
    types,
    metadata
  } = action.fields

  const state = store.getState()
  const { token } = state.auth

  headers['Authentication'] = token

  next({
    type: types.REQUEST,
    metadata
  })

  const subject = new Subject()
  const apiRequest = apiCall(url, endpoint, method, query, headers)

  const onError = payload => {
    const data = {
      payload,
      type: types.FAILURE,
      metadata,
      error: true
    }

    if (payload.message) {
      toast.error(payload.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }

    next(data)

    subject.error()
  }

  const onSuccess = successData => {
    //google reply check
    if (successData.status && successData.status !== 'OK') {
      return onError(successData)
    }

    const data = {
      payload: successData,
      type: types.SUCCESS,
      metadata
    }

    next(data)

    subject.next(data)
    subject.complete()
  }

  apiRequest.subscribe(onSuccess, onError)

  return subject
}
