import React from 'react';
import PropTypes from 'prop-types';
import './nav-avatar.scss';

class NavAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag;
    this.img = props.img;
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <this.tag className={'nav-item inset'}>
        <img
          alt="avatar-img"
          src={this.img}
        />
      </this.tag>
    );
  }
}

NavAvatar.propTypes = {
  tag: PropTypes.string,
  img: PropTypes.string,
};

NavAvatar.defaultProps = {
  tag: 'li',
  img: 'https://www.synergybis.com/wp-content/uploads/2016/10/img.png',
  //img: 'https://qph.ec.quoracdn.net/main-qimg-d83ecc03a7cf92be269c9eb7c7575725',
};

export default NavAvatar;
