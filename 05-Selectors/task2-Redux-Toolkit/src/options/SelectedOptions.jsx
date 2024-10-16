import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveOption } from './optionsSlice';
import { selectSelectedOptions } from './optionsSelectors';
import Options from './Options.jsx';

const SelectedOptions = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectSelectedOptions);

  const handleMoveOption = optionId => {
    dispatch(moveOption({ optionId }));
  };

  return <Options title="Selected options" options={options} moveOption={handleMoveOption} />;
};

export default SelectedOptions;
