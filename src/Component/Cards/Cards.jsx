import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container
} from "reactstrap";
import CountUp from 'react-countup';
import styles from './Cards.module.css';


const Cards =({ data: { confirmed, recovered, deaths, lastUpdate } }) =>{
    
    if (!confirmed) {
        return '';
      }

      
    return (
        <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" align="center">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0" >
                    <CardBody className={styles.infected}>
                      <Row>
                        <div className="col ">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0 "
                            
                          >
                            Infectés | الحالات المؤكدة | ⴰⵊⵎⵎⵉⵄ
                          </CardTitle>
                          <br></br>
                          <span className="h2 font-weight-bold mb-0 text-warning">
                          <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                            {new Date(lastUpdate).toDateString()}
                         <br></br>
                        </span>
                        <span>Nombre des cas actifs de COVID-19.</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody className={styles.recovered}>
                      <Row>
                        <div className="col container">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            guéris | المتعافون | ⵉⵊⵊⵉⵏ
                          </CardTitle>
                          <br></br>
                          <span className="h2 font-weight-bold text-success mb-0">
                          <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                          </span>
                        </div>
                      </Row>   
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          {new Date(lastUpdate).toDateString()}
                         <br></br>
                        </span>{" "}
                        <span >Nombre de Guérisons de COVID-19.</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody className={styles.deaths}>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Morts | الوفيات | ⵉⵎⵓⵜⵏⵉⵏ
                          </CardTitle>
                          <br></br>
                          <span className="h2 font-weight-bold text-danger mb-0">
                          <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                          </span>
                        </div>
                       
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                           {new Date(lastUpdate).toDateString()}
                         <br></br>
                        </span>{" "}
                        <span >Nombre de décès causés par COVID-19.</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                
              </Row>
            </div>
          </Container>
        </div>
      </>
    )
  
}

export default Cards;