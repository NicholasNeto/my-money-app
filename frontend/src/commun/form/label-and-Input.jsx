import React from 'react';
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols} className='form-group'>
        <label thmlFor={props.name} >{props.name}</label>
        <input type={props.type} {...props.input} className="form-control" placeholder={props.placeholder}
            readOnly={props.readOnly} />

    </Grid>
)