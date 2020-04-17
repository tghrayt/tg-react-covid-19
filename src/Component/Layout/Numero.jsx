import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText, Container, Row ,Col} from 'reactstrap';


  const numero =() =>{
   

    return(
<div className="header bg-gradient-info pb-8 pt-5 pt-md-8" align="center">
<Container fluid>
      <Card className="card-stats mb-4 mb-xl-0" >
        <CardHeader>   أرقام هاتفية للإتصال عند الضرورة</CardHeader>
        <CardBody>
        <div className="header-body">
        <Row className=" mb-4 " >
            <Col lg="6" xl="4">        
                       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="card-stats mb-4 mb-xl-0" >
                                    <CardTitle>INSTITUT PASTEUR</CardTitle>
                                    <CardText>المختبر المغربي  باستور&nbsp;&nbsp;<i class="fas fa-university"></i></CardText>
                                    <a href="tel:0522262062"><Button><i className="fa fa-phone" />&nbsp;&nbsp; 0522262062</Button></a>
                         </Card>
            </Col> 
            <Col lg="6" xl="4">        
                         <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="card-stats mb-4 mb-xl-0" >
                                    <CardTitle>POLICE</CardTitle>
                                    <CardText>الشرطة&nbsp;&nbsp;<i class="fas fa-taxi"></i></CardText>
                                    <a href="tel:190"><Button><i className="fa fa-phone" />&nbsp;&nbsp; 190</Button></a>
                         </Card>
            </Col> 
            <Col lg="6" xl="4">        
                         <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="card-stats mb-4 mb-xl-0" >
                                    <CardTitle>ALO YAQADA</CardTitle>
                                    <CardText>ألو يقظة وبائية&nbsp;&nbsp;<i class="fas fa-stethoscope"></i></CardText>
                                    <a href="tel:141"><Button><i className="fa fa-phone" />&nbsp;&nbsp; 141</Button></a>
                         </Card>
            </Col>                
        </Row>

        <Row className=" mb-4 " >
            <Col lg="6" xl="4">        
                       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="card-stats mb-4 mb-xl-0" >
                                    <CardTitle>AMBULANCE</CardTitle>
                                    <CardText>سيارة الإسعاف&nbsp;&nbsp;<i class="fas fa-ambulance"></i></CardText>
                                    <a href="tel:150"><Button><i className="fa fa-phone" />&nbsp;&nbsp; 150</Button></a>
                         </Card>
            </Col> 
            <Col lg="6" xl="4">        
                         <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="card-stats mb-4 mb-xl-0" >
                                    <CardTitle>SOS MÉDECINS</CardTitle>
                                    <CardText>المساعدة الطبية&nbsp;&nbsp;<i class="fas fa-hospital-alt"></i></CardText>
                                    <a href="tel:0522989898"><Button><i className="fa fa-phone" />&nbsp;&nbsp; 0522989898</Button></a>
                         </Card>
            </Col> 
            <Col lg="6" xl="4">        
                         <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="card-stats mb-4 mb-xl-0" >
                                    <CardTitle>CENTRE ANTIPOISON</CardTitle>
                                    <CardText>مركز التسممات&nbsp;&nbsp;<i class="fas fa-skull-crossbones"></i></CardText>
                                    <a href="tel:0801000180"><Button><i className="fa fa-phone" />&nbsp;&nbsp; 0801000180</Button></a>
                         </Card>
            </Col>                
        </Row>
        </div>
        </CardBody>
        
        
      </Card>
</Container>
</div>
    )

  }


  export default numero;