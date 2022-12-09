import React from 'react'

import styled  from 'styled-components'
import HeroText from './HeroText';
import Container from 'react-bootstrap/Container';

const HeroH= styled.div`
${'' /* position: absolute; */}


.hero {
    background:url('movie.jpeg');
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${'' /* position: relative; */}
  width: 100%;
height: 550px;
left: 0px;
${'' /* margin-top:0px; */}
${'' /* top: 138px; */}
}
`;
function Hero() {
  return (
    <HeroH>
    
    <div className='hero' >

<Container >
<HeroText />
    </Container>
     

    </div>

    </HeroH>
  )
}

export default Hero