import React from 'react'
import styled  from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const HeroT= styled.div`
   .tex{
    color:#fff;
   
width: 600px;
marging-left: 37px;
top: 400px;


border-radius: nullpx;

${'' /* margin-top: 100px; */}

   }
   h1{
    max-width:80%;
    font-size: 70px;
    margin:auto;
    padding-top:100px
   
   }

   @media only screen and (max-width: 600px) { 

    h1 {
          ${'' /* font-size: 40px; */}
          padding-top:80px
margin-top: 100px;
font-family: DM Sans;
font-size: 62px;
font-weight: 700;
line-height: 94px;
letter-spacing: -0.05em;
text-align: center;

    }
    .tex {
            /* width: 590px; */
            width: 600px;     
    max-width: 80%;
    margin: auto;
    }
   }
   @media only screen and (max-width: 400px) { 

h1 {
      ${'' /* font-size: 40px; */}
      padding-top:80px
margin-top: 100px;
font-family: DM Sans;
font-size: 45px;
font-weight: 700;
line-height: 56px;
letter-spacing: -0.05em;
text-align: center;

}
.tex {
        /* width: 590px; */
        width: 600px;     
max-width: 80%;
margin: auto;
}
}


   
`;

function HeroText() {
  return (
    <HeroT>
    <Container >
    <Row className="justify-content-md-center">
    <Col >
    <div className="tex">
    <h1 style={{color:"#fff"}} >
            Watch something Incredible
        </h1>
    </div>
    
    </Col>
    
     
    
    </Row>
    </Container>
    
    </HeroT>
   
  )
}

export default HeroText