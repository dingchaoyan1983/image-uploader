import React from 'react';
import { prop, map } from 'lodash/fp';
import { RATIO } from '../constants';
import Positioner from './Positioner';
import ImageUploader from './ImageUploader';

export default class Page extends React.Component {
    render() {
        const style = {
            width: `${this.props.width / RATIO}vw`,
            height: `${this.props.height / RATIO}vw`,
            left: `${this.props.left / RATIO}vw`,
            top: `${this.props.top / RATIO}vw`,
        };

        return <div style={style} className="page">
                {
                    map((slot) => {
                        return <Positioner 
                                   width={prop('width')(slot)} 
                                   height={prop('height')(slot)} 
                                   centerX={prop('center_x')(slot)}
                                   centerY={prop('center_y')(slot)}>
                                   <ImageUploader width={prop('width')(slot)} height={prop('height')(slot)}/>
                               </Positioner>
                    })(prop('slots')(this.props))
                }
               </div>
    }
}

Page.defaultProps = {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    slots: []
}