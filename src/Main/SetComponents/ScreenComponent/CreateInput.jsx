import React from 'react';

const CreatInput = ({id,className,type,pattern,onChange,value,state}) => {

	// value={id === '1'? state.startCountValue: id === '2' ? state.maxCountValue : ''}

	return <input  id={id}  type={type} className={className} pattern={pattern} onChange={onChange}
				   placeholder='введите число'/>
};

export default CreatInput;
