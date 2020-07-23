import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub  } from '@fortawesome/free-brands-svg-icons'
import { Footer, Button, Svg } from './Footer-Styles'

export default props => 
  <Footer style={{alignItems:'center', justifyContent:'center', flexDirection:"column"}}>
    {/* <Button 
      href={`https://medium.com/p/${props.mediumId}`}
      title='Medium Article'
      provider='medium'
    >
      <Svg>
        <FontAwesomeIcon icon={faMediumM} size='3x' color='#fff' />
      </Svg>
    </Button> */}
    <Button 
      href={`https://github.com/iplexdev/React-Confirmation-Email`}
      title='Github repo'
      provider='github'
    >
      <Svg>
        <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
      </Svg>
    </Button>
    <div>
      <h4>IplexDex</h4>
    </div>
  </Footer>