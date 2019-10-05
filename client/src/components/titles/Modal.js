import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTitleDetails } from '../../actions/titleActions';

const Modal = ({
  current,
  getTitleDetails,
  title: { titleDetails, loading }
}) => {
  const [titleName, setTitleName] = useState('');

  const arrayUnique = arr => {
    var uniqueName = arr.map(item => {
      return item.Name;
    });

    return uniqueName.filter((item, index) => {
      return uniqueName.indexOf(item) >= index;
    });
  };

  useEffect(() => {
    if (current) {
      getTitleDetails(current.TitleId);
      setTitleName(current.TitleName);
    }
    // eslint-disable-next-line
  }, [current]);

  return (
    <div id='modal' className='modal' style={modalStyle}>
      {!loading && titleDetails !== null && (
        <div className='modal-content'>
          <h4>
            {titleName} ({titleDetails.ReleaseYear})
          </h4>
          <div className='row'>
            <strong>Director</strong>
            <br />
            <span className='black-text'>
              {arrayUnique(
                titleDetails.Participants.filter(p => p.RoleType === 'Director')
              ).map((participant, i) => [
                i > 0 && ', ',
                <span key={i}>{participant}</span>
              ])}
            </span>
          </div>
          <div className='row'>
            <strong>Screenplay</strong>
            <br />
            <span className='black-text'>
              {arrayUnique(
                titleDetails.Participants.filter(
                  p => p.RoleType === 'Screenplay'
                )
              ).map((participant, i) => [
                i > 0 && ', ',
                <span key={i}>{participant}</span>
              ])}
            </span>
          </div>

          <div className='row'>
            <strong>Producer</strong>
            <br />
            <span className='black-text'>
              {arrayUnique(
                titleDetails.Participants.filter(p => p.RoleType === 'Producer')
              ).map((participant, i) => [
                i > 0 && ', ',
                <span key={i}>{participant}</span>
              ])}
            </span>
          </div>

          <div className='row'>
            <span className='black-text'>
              <strong>Genres</strong>
              <br />
              <span className='black-text'>
                {titleDetails.Genres.map((genre, i) => [
                  i > 0 && ', ',
                  <span key={i}>{genre}</span>
                ])}
              </span>
            </span>
          </div>

          <div className='row'>
            <strong>Description</strong>
            <br />
            <span>{titleDetails.Storylines[0].Description}</span>
          </div>

          {titleDetails.Awards.filter(a => a.AwardWon === true).length > 0 && (
            <div className='row'>
              <strong>Awards Won</strong>
              <br />
              <span className='black-text'>
                {titleDetails.Awards.filter(a => a.AwardWon === true).map(
                  (award, i) => [
                    i > 0 && ', ',
                    <span key={i}>{award.Award}</span>
                  ]
                )}
              </span>
            </div>
          )}

          <div className='row'>
            <strong>Actors</strong>
            <br />
            <span className='black-text'>
              {titleDetails.Participants.filter(
                p => p.RoleType === 'Actor'
              ).map((participant, i) => [
                i > 0 && ', ',
                <span key={i}>{participant.Name}</span>
              ])}
            </span>
          </div>

          {titleDetails.Participants.filter(
            p => p.RoleType === 'Special Effects'
          ).length > 0 && (
            <div className='row'>
              <strong>Special Effects</strong>
              <br />
              <span className='black-text'>
                {titleDetails.Participants.filter(
                  p => p.RoleType === 'Special Effects'
                ).map((participant, i) => [
                  i > 0 && ', ',
                  <span key={i}>{participant.Name}</span>
                ])}
              </span>
            </div>
          )}
        </div>
      )}
      <div className='modal-footer'></div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

Modal.propTypes = {
  current: PropTypes.object,
  title: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  current: state.title.current,
  title: state.title,
  getTitleDetails: PropTypes.func.isRequired
});

export default connect(
  mapStateToProps,
  { getTitleDetails }
)(Modal);
