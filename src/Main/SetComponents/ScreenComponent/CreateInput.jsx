import React from 'react';

const CreatInput = ({id,className,type,pattern,onChange,state,value}) => {

	return <input  id={id}  type={type} className={className} pattern={pattern} onChange={onChange}
				   placeholder='введите число' value={value}/>
};

export default CreatInput;
