import React from 'react';
import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.actions';

const mapState = state => ({
  options: selectedOptionsSelector(state),
});

const mapDispatch = {
  moveOption: toggleOption,
};

const SelectedOptions = props => <Options {...props} title="Selected options" />;

export default connect(mapState, mapDispatch)(SelectedOptions);
