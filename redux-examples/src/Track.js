import React from 'react';
import { connect } from 'react-redux';

const Track = ({ track }) => <div>{track.name}</div>;


const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    console.log(state.tracks);
    console.log(ownProps.match.params.id);
    return {
        track: state.tracks.find(track => track.id === Number(ownProps.match.params.id))
    };
};

export default connect(mapStateToProps)(Track);