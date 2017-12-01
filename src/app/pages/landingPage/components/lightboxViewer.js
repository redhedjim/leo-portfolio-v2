import React, { Component } from 'react';
import Lightbox from 'react-images';

class LightboxViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,      
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.onClickThumbnail = this.onClickThumbnail.bind(this);
  }
  onClickThumbnail(index) {
    this.setState({
      currentImage: index,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  renderGallery() {
    const screenshots = this.props.images;
    if (!screenshots) return;
    const gallery = screenshots.map((obj, i) => (
      <a
        href={obj}
        key={obj}
        onClick={(e) => this.openLightbox(i, e)}
      >
        <img className="screenshot" src={obj} />
      </a>
    ));

    return (
      <div>
        {gallery}
      </div>
    );
  }
  render() {
    const { images } = this.props;
    const screenshots = [];
    images.forEach(image => {
      screenshots.push({ src: image });
    });
    return (
      <div className="lightbox">
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={screenshots}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          showThumbnails
          backdropClosesModal
          onClickThumbnail={this.onClickThumbnail}
        />
      </div>
    );
  }
}

export default LightboxViewer;
