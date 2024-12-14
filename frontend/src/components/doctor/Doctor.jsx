import React from 'react'
import { useParams } from 'react-router-dom';

const Doctor = () => {

    const params = useParams();

    const{id,name,desc,post,img} = params;

  return (
    <div>Doctor{name}</div>
  )
}

export default Doctor