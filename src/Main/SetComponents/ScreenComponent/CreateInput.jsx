import React from 'react';

const CreatInput = ({id,className,type,pattern,onChange,value}) => {

	return <input  id={id} value={value}  type={type} className={className} pattern={pattern} onChange={onChange}/>
};

export default CreatInput;
