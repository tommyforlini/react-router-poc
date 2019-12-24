import React from 'react';
import {
  useParams
} from 'react-router-dom'


const Redirector = () => {

  let { id } = useParams()

  return (
    <>
      <h1>Redirector Page</h1>
      <h3>Param in URL is >> {id}</h3>
    </>
  );
}

export default Redirector;
