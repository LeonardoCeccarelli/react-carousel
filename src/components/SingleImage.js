import React, { Component } from 'react';

class SingleImage extends Component {
    constructor(props) {
        super(props)
    }

    setActiveImage = () => {
        if (this.props.i === this.props.active) {
            return 'active'
        } else {
            return ''
        }
    }

    render() {
        return (
            <div className={'image_container ' + this.setActiveImage()}>
                <img src={require('../assets/' + this.props.element.url + '.jpg')}></img>
                <div className='image_text'>
                    <h3>{this.props.element.title}</h3>
                    <p>{this.props.element.subTitle}</p>
                </div>
            </div>
        );
    }
}

export default SingleImage;