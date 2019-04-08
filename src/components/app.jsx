import React, { Component} from 'react';

import LeftArrow from './left_arrow.jsx'
import RightArrow from './right_arrow.jsx'
import pictures from '../../data/pictures';
import Header from './header.jsx';
import Cover from './cover.jsx';
import PictureList from '../containers/picture_list.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures,
      currentIndex: 0,
      translateValue: 0
     }
    }

    goToPrevSlide = () => {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }));
     }

    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if(this.state.currentIndex === this.state.pictures.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }

      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + - (this.slideWidth())
      }));
    }

    slideWidth = () => {
       return document.querySelector('.picture').clientWidth
    }

  render() {
    return (
      <div className="main-container">
        <div className="navbar">
          <Header />
        </div>

        <div id="cover_page">
          <Cover />
        </div>

        <div id="pictures" >
           <h1>Pictures</h1>
          <div className="slider">
            <div className="slider-wrapper"
                style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
                }}>
              <PictureList  pictures={this.state.pictures} />
            </div>

            <LeftArrow  goToPrevSlide={this.goToPrevSlide} />
            <RightArrow goToNextSlide={this.goToNextSlide} />
          </div>
        </div>



      </div>
    );
  }
}

export default App;
