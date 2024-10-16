import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveOption } from './optionsSlice';
import { selectOptionsList } from './optionsSelectors';
import Options from './Options.jsx';

const AvailableOptions = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectOptionsList);

  const handleMoveOption = optionId => {
    dispatch(moveOption({ optionId }));
  };

  return <Options title="Available options" options={options} moveOption={handleMoveOption} />;
};

export default AvailableOptions;
