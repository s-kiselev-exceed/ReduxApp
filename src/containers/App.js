import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { setYear, setUser, getPhotos, exitUser } from '../actions/PageActions'
import '../App.css'

class App extends Component {

  render() {
    const { name } = this.props.user
    const { year, photos, isFetching } = this.props.page
    const { setYearAction, getPhotosAction, setUserAction, exitUserAction } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <User name={name} setUser={setUserAction} exitUser={exitUserAction} />
          </h1>
          <Page
            name={name}
            isFetching={isFetching}
            year={year}
            photos={photos}
            setYear={setYearAction}
            getPhotos={getPhotosAction}
          />
        </header>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
    isFetching: store.isFetching
  }
}

const mapDispatchToProps = dispatch => ({
  setYearAction: () => dispatch(setYear()),
  getPhotosAction: year => dispatch(getPhotos(year)),
  setUserAction: () => dispatch(setUser()),
  exitUserAction: () => dispatch(exitUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
