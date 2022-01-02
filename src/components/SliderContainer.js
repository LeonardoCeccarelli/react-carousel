import React, { Component } from 'react';
import SingleImage from './SingleImage';

class SliderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listImage: [
                {
                    url: '01',
                    title: 'Svezia',
                    subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    url: '02',
                    title: 'Svizzera',
                    subTitle: 'Lorem ipsum',
                },
                {
                    url: '03',
                    title: 'Gran Bretagna',
                    subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    url: '04',
                    title: 'Germania',
                    subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    url: '05',
                    title: 'Paradise',
                    subTitle: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                }
            ],
            currentActiveImage: 0,
        }
    }

    onNextBtn = () => {
        if (this.state.currentActiveImage === this.state.listImage.length - 1) {
            this.setState({ currentActiveImage: 0 })
        } else {
            this.setState({ currentActiveImage: this.state.currentActiveImage + 1 })
        }
    }

    onBeforeBtn = () => {
        if (this.state.currentActiveImage === 0) {
            this.setState({ currentActiveImage: this.state.listImage.length - 1 })
        } else {
            this.setState({ currentActiveImage: this.state.currentActiveImage - 1 })
        }
    }

    render() {
        return (
            <div className='slider_container'>
                <div onClick={this.onBeforeBtn} className='arrow arrow_left'>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div onClick={this.onNextBtn} className='arrow arrow_right'>
                    <i className="fas fa-arrow-right"></i>
                </div>
                {this.state.listImage.map((element, i) => {
                    return <SingleImage
                        element={element}
                        i={i}
                        key={i}
                        active={this.state.currentActiveImage} />
                })}
            </div>
        );
    }
}

export default SliderContainer;