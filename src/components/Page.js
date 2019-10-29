import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {

  state = {
    value: 0
  }

  onBtnClick = e => {
    if (this.state.value === 0) {
      this.props.getPhotos(0);
      this.setState({ value: e.currentTarget.innerText })
    }
  };

  renderPhotos = () => {
    let arr = this.props.photos.map((entry, index) => (<div key={index} style={{ marginLeft: "10px" }}>
      <p>
        <img src={entry.sizes[0].url} alt="" />
      </p>
      <p><span style={{ color: "yellow" }}>{entry.likes.count}</span>
        <span style={{ color: "red" }}>❤</span>
      </p>
    </div>
    ))
    return arr
  }

  render() {
    const { isFetching, name } = this.props;
    return (
      <div>
        {name !== 'anonymous' ? (
          <div>
            <h6>Click if you want check photos from:</h6>
            <div>
              <button style={{ borderRadius: "5px", backgroundColor: "#09d3ac", borderColor: "yellow", color: "black" }}
                onClick={this.onBtnClick}>
                Get photos
              </button>
            </div>
            {isFetching ? <div style={{ display: 'flex', direction: "row", margin: "auto" }}>
              {this.renderPhotos()}
            </div> : null}
          </div>
        ) : null}
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
  getPhotos: PropTypes.func.isRequired
};
