import React from 'react';
import { prop } from 'lodash/fp';
import { RATIO } from '../constants';

export default class Positioner extends React.Component {
    render() {
        const width = prop('width')(this.props) || 0;
        const height = prop('height')(this.props) || 0;
        const centerX = prop('centerX')(this.props) || 0;
        const centerY = prop('centerY')(this.props) || 0;
        const left = centerX - width / 2;
        const top = centerY - height / 2;

        const style = {
            width: `${width / RATIO}vw`,
            height: `${height / RATIO}vw`,
            left: `${left / RATIO}vw`,
            top: `${top / RATIO}vw`,
        };

        return <div style={style} className="positioner">
                {this.props.children}
               </div>
    }
}

Positioner.defaultProps = {
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0,
}