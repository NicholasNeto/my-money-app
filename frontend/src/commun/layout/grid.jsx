import React, { Component } from 'react'


class Grid extends Component {

    toCssClass(numbers){
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes +=  `cols-xs-${cols[0]}`
        if(cols[1]) classes +=  `cols-sm-${cols[1]}`
        if(cols[2]) classes +=  `cols-md-${cols[2]}`
        if(cols[3]) classes +=  `cols-lg-${cols[3]}`

        return classes
    }

    render(){

        const { cols } = this.props 
        const gridClasses = this.toCssClass(cols || 12)
        return(
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )

    }
}

export default Grid