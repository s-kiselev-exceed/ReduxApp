import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class User extends Component {

  onHandler = () => {
    const { name } = this.props
    if (name === "anonymous") {
      this.props.setUser()
    }
    else {
      this.props.exitUser()
    }
  }

  render() {
    const { name } = this.props
    return (
      <div>
        <span>
          <button style={{
            borderRadius: "5px", backgroundColor: "#09d3ac",
            borderColor: "yellow", color: "black"
          }}
            onClick={this.onHandler}>{name === "anonymous" ? 'Click for login' : 'Click for exit'}
          </button>
        </span>
        {name === "anonymous" ? <h6>{name}, login to view photo </h6> : <h6>Hi, {name}!</h6>}
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
}