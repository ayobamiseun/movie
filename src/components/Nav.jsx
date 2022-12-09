import React from 'react'
import TextNav from './TextNav'
import Container from 'react-bootstrap/Container';
import styled  from 'styled-components'

const Header= styled.div`

font-size: 1.5em;
text-align: center;
color: palevioletred;
height: 140px;
background-color:#292929;
margin:0px;
 `;
function Nav() {
  return (
    

   <Header>

<Container fluid>
<TextNav title="MyTestApp" />
    </Container>
   </Header>
   
  )
}

export default Nav