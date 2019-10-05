import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrent } from '../../actions/titleActions';

const TitleItem = ({ title, setCurrent }) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#modal'
          className={`modal-trigger ${
            title.TitleName ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(title)}
        >
          {title.TitleName}{' '}
          <span className='grey-text'>({title.ReleaseYear})</span>
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>
            {title.Genres.map((genre, i) => [
              i > 0 && ', ',
              <span key={i}>{genre}</span>
            ])}
          </span>
        </span>
      </div>
    </li>
  );
};

TitleItem.propTypes = {
  title: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(
  null,
  { setCurrent }
)(TitleItem);
