import React from 'react';
import { connect } from 'react-redux';
import { CANVAS_WIDTH } from '../constants';
import { loadLayout } from '../redux/reducers/actions';
import { prop, map } from 'lodash/fp';

import Page  from './Page';

const mapStateToProp = (state) => state;

class Canvas extends React.Component {
    componentDidMount() {
        this.props.loadLayout();
    }
    
    render() { 
        const width = prop('page.width')(this.props) || 0;
        const height =prop('page.height')(this.props) || 0;
        const outerLeft = (CANVAS_WIDTH - width) / 2 ;
        const slots = prop('page.slots')(this.props) || [];
         
        return <div className="canvas">
                    <Page 
                        width={width}
                        height={height}
                        left={outerLeft}
                        slots= {slots}
                    />
                </div>
    }
}

export default connect(mapStateToProp, {
    loadLayout,
})(Canvas);