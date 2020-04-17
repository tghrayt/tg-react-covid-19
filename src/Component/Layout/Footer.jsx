
import React from "react";


import {
  Button,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
         
          <Container>
            
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.linkedin.com/in/youssef-ait-tghrayt-7418b5161/"
                  >
                    Ait tghrayt youssef 
                  </a>
                  &nbsp; ingénieur en génie logiciel full-stack.
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                  <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://www.facebook.com/youssef.aittaghrayt"
                  id="tooltip495507257"
                >
                  <span className="btn-inner--icon">
                  <i class="fab fa-facebook"></i>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Mon compte facebook
                </UncontrolledTooltip>
                  </NavItem>
                  
                  <NavItem>
                  <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://twitter.com/tghrayt"
                  id="tooltip495507251"
                >
                  <span className="btn-inner--icon">
                  <i class="fab fa-twitter"></i>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507251">
                  Mon compte twitter
                </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                  <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com/tghrayt"
                  id="tooltip495507253"
                >
                  <span className="btn-inner--icon">
                  <i class="fab fa-github"></i>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507253">
                  Mon compte github
                </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
