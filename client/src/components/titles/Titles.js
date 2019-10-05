import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TitleItem from './TitleItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getTitles } from '../../actions/titleActions';

const Titles = ({ title: { titles, loading }, getTitles }) => {
  useEffect(() => {
    getTitles();
    // eslint-disable-next-line
  }, []);

  if (loading || titles === null) {
    return <Preloader />;
  }
  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>Titles</h4>
        </li>
        {!loading && titles.length === 0 ? (
          <p className='center'>No titles to show...</p>
        ) : (
          titles.map(title => <TitleItem title={title} key={title.TitleId} />)
        )}
      </ul>
    </div>
  );
};

Titles.propTypes = {
  title: PropTypes.object.isRequired,
  getTitles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  title: state.title
});

export default connect(
  mapStateToProps,
  { getTitles }
)(Titles);
