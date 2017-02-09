import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearList, replayList, setTrack} from '../actions';
import FontAwesome from 'react-fontawesome';

class Queue extends Component {

  listItems() {
    return this.props.list.list.map(track => {
      return (
        <li key={track.id} className="album-track-item">
          <div className="click-play" onClick={() => this.props.setTrack(track)}>
            <FontAwesome
              className="nav-icon album-track-play"
              name="play"
              size="lg"
              />
            <span className="album-trackname">{track.name}</span>
          </div>
        </li>
      );
    });
  }

  render() {
    if (!this.props.list) {
      return <div />;
    }
    return (
      <div>
        <div className="playlist-controls">
          <button className="default-button" onClick={() => this.props.clearList()}>Clear queue</button>
          <button className="default-button" onClick={() => this.props.replayList()}>Play again</button>
        </div>
        <ul className="album-tracks-list">{this.listItems()}</ul>
      </div>
    );
  }
}

Queue.propTypes = {
    clearList: React.PropTypes.func,
    setTrack: React.PropTypes.func,
    replayList: React.PropTypes.func,
    list: React.PropTypes.object
};

function mapStateTopProps(state) {
  return {
    list: state.list
  };
}

export default connect(mapStateTopProps, {clearList, replayList, setTrack})(Queue);