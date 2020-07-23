import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

export default props =>
  <div className={`fadeIn ${props.spinning}`}>
    {/* <h2>Hello User</h2> */}
    <FontAwesomeIcon icon={faSync} size={props.size} />
  </div>