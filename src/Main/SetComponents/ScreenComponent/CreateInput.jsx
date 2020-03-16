import React from 'react';

const CreatInput = ({id,className,type,pattern,onChange,state,value}) => {





	return <input  id={id}  type={type} className={className} pattern={pattern} onChange={onChange}
				   placeholder='insert the number' value={id === 2 ? state.startCountValue : id === 1 ?
				   state.maxCountValue: 'insert the number'} />
};

export default CreatInput;
