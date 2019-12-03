import React from 'react';
import { render } from 'react-dom'
import { Stage, Layer, Rect } from 'react-konva';

class GenCanvas extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stage width={300} height={300}>
                <Layer>
                    <Rect x={20} y={20} width={100} height={100} fill={'green'} />
                </Layer>
            </Stage>
        );
    }
}

export default GenCanvas;
