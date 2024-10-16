import React from 'react';
import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.actions';

const mapState = state => ({
  options: availableOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

const AvailableOptions = props => <Options {...props} title="Available options" />;

export default connect(mapState, mapDispatch)(AvailableOptions);
