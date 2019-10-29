/* global VK */
export function setYear(year) {
    return {
        type: 'SET_YEAR',
        payload: year,
    }
}

// LOGIN
export function setUser() {

    return function(dispatch) {
      VK.Auth.login(r => {
        if (r.session) {
          let username = r.session.user.first_name
          dispatch({
            type: "SET_USER",
            payload: username,
          })
        } else {
          dispatch({
            type: "LOGIN_FAIL",
            error: true,
            payload: new Error('Ошибка авторизации'),
          })
        }
      }, 4)
    }
  }

export function exitUser() {
    return {
        type: 'EXIT_USER',
        payload: 'anonymous'
    }
}

/// For Gets Photos 
let photosArr = []

function getMorePhotos(offset, count, year, dispatch) {
  VK.Api.call(
    'photos.getAll',
    { extended: 1, count: count, offset: offset, v: '5.80' },
    r => {
      try {
        photosArr = photosArr.concat(r.response.items)

          dispatch({
            type: "GET_PHOTOS_SUCCESS",
            payload: photosArr,
          })
      } catch (e) {
        dispatch({
          type: "GET_PHOTOS_FAIL",
          error: true,
          payload: new Error(e),
        })
      }
    }
  )
}

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: "GET_PHOTOS_REQUEST",
      payload: year,
    })
      getMorePhotos(0, 200, year, dispatch)
  }
}