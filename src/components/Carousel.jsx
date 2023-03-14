import { Component } from 'react'

class Carousel extends Component {
    state = {
        active: 0
    }
    
    static defaultProps = {
        images: [`http://pets-v2.dev-apis.com/pets/none.jpg`] 
    } // This is what the name says => default props. / Horrrible way to declare default props but that's how you do it on class Components.

    render(){
        const { active } = this.state; // use [this] => key here.
        const { images } = this.props;
    
    
        return (
            <div className='carousel'>
                <img src={images[active]} alt="animal hero" />
                <div className='carousel-smaller'>
                    {images.map((photo, index) => (
                        <img 
                          key={photo}
                          src={photo}
                          alt='animal thumbnail'
                          className={index === active ? 'active' : ''}
                        />

                    ))}
                </div>
            </div>
        )
    }
};

export default Carousel;