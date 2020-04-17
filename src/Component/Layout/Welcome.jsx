import React from "react";
// reactstrap components
import {
  Card,
  Row,
  Col,
  Container,
  Button
} from "reactstrap";
import styles from './Layout.module.css'
import image from '../../img/new_message.svg'


const Welcome =() =>{

return(

<>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" align="center">
          <Container fluid>
            <div className="header-body bg-light">
              {/* Card stats */}
              <Card className="card-stats  mb-xl-0">
              <Row >
                <Col lg="6" xl="4" className="mb-4 mb-xl-0">
               
                    <Row><br /><br /></Row>
                    <Row><br /><br /></Row>
                    <a href="/">
                    <Button color="primary" outline type="button">
                    ⴰⵄⴰⵡⵯⴷ    |  تحديث البيانات
                    </Button>
                    </a>
                   <Row><br /></Row>
                        <p className="mt-3 mb-0 text-muted text-sm" >
                            <span className="text-info mr-2">
                            {new Date().toDateString()}  : آخر تحديث
                            </span>
                        </p>
                        
                </Col>
                <Col lg="6" xl="4" className="mb-4 mb-xl-0">
                        <Row><br /><br /></Row>
                    <h3>ⴰⵣⵓⵍ     مرحبا بكم</h3>
                    
                    <p>
                        <span>
                           .هذا الموقع غير رسمي ، يقدم مستجدات رسمية لفيروس كورونا في العالم
                            <br /> ⵎⴰⵖⴹⵢⵓ ⴰⴱⴰⵢⵓⵕ ⵏ ⵇⵓⵔⵓⵏⴰ ⵖ ⵜⴰⵎⵓⵔⵜ
                           
                        </span>
                        
                    </p>
                  
                      <Row><br /><br /></Row>
                </Col>
                <Col lg="6" xl="4" className="mb-4 mb-xl-0">
                    <Row><br /></Row>
                <img src={image} alt="new_message" className={styles.image} />
                </Col>
                
              </Row>
              </Card>
            </div>
          </Container>
        </div>
      </>

)

}

export default Welcome;