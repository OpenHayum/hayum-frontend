import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
    isMobileDevice: PropTypes.bool.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { isMobileDevice } = this.props;
    return (
      <div styleName={classNames("Sidebar", {
        "Sidebar--is-mobile": isMobileDevice,
      })}>
        <div></div>
        <ul>
          <li><a>Mp3<b class="caret"></b></a>
            <ul>
              <li>Artists</li>
              <li><a href="/music?artist=Ranbir Thouna">Ranbir Thouna</a></li>
              <li><a href="/music?artist=Pushparani Huidrom">Pushparani Huidrom</a></li>
              <li><a href="/music?artist=AJ Maisnam">AJ Maisnam</a></li>
              <li><a href="/music?artist=Mandakini">Mandakini</a></li>
              <li><a href="/music?artist=Arbin Soibam">Arbin Soibam</a></li>
              <li><a href="/music?artist=Sori Senjam">Sori Senjam</a></li>
              <li><a href="/music?artist=Aphao">Aphao</a></li>
              <li><a href="/music?artist=Kunjabihari">Kunjabihari</a></li>
              <li><a href="/music?artist=Pahari">Pahari</a></li>
              <li><a href="/music?artist=Tijendra Sagolshem">Tijendra Sagolshem</a></li>
              <li><a href="/music?artist=Khun Jiban">Khun Jiban</a></li>
              <li><a href="/music?artist=Sadananda">Sadananda</a></li>
              <li><a href="/music?artist=Dinesh">Dinesh</a></li>
              <li><a href="/music?artist=Hamom Naba">Hamom Naba</a></li>
              <li><a href="/music?artist=Suren">Suren</a></li>
              <li><a href="/music?artist=Madhuri">Madhuri</a></li>
              <li><a href="/music?artist=Mangka">Mangka</a></li>
              <li><a href="/music?artist=Nandeshwori">Nandeshwori</a></li>
              <li><a href="/music?artist=Roshibina">Roshibina</a></li>
              <li><a href="/music?artist=Sarita Gazmir">Sarita Gazmir</a></li>
              <li><a href="/music?artist=Surma">Surma Chanu</a></li>
              <li><a href="/music?artist=Sushmita">Sushmita</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default cssModules(Sidebar, styles, { allowMultiple: true });
