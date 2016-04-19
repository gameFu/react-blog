import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

require('../style/demo.scss');

class DemoComponent extends Component {
  render() {
    let color = this.props.light.color;
    return (
      <div className="traffic-light">
      <span className={classnames('light', color)}/>
      </div>
    );
  }
}

DemoComponent.propTypes = {
  light: PropTypes.object.isRequired
}

DemoComponent.defaultProps = {
  light: {color: 'red', time: '4'}
}

export default DemoComponent;
