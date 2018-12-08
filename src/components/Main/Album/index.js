import React from 'react';

class Album extends React.Component {
  render() {
    const { match } = this.props;
    const albumId = match.params.albumId;

    return (
      <h1>Album: { albumId }</h1>
    );
  }
}

export default Album;