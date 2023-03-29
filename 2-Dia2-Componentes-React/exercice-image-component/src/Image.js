import React from 'react';
import './App.css'

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img className="gato" src={ source } alt={ alternativeText } />;
  }
}

export default Image;
