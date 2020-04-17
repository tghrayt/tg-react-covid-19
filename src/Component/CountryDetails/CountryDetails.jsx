import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Card,  CardTitle, CardText, Row, Col,
    Container,
    Button
  } from "reactstrap";
  import { Link} from 'react-router-dom';




const Countries = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await fetchCountries());
      };
  
      fetchAPI();
    }, []);
  
    return (
        <>
    <di  className="header bg-gradient-info pb-8 pt-5 pt-md-8" align="center">
        <Container fluid>
      
        <div className="header-body ">
        <Row className=" mb-4 ">
      <Col xl="8" lg="6">
      <br />
        <Card body className="card-stats mb-4 mb-xl-0">
          <CardTitle>مبيان الإحصائيات&nbsp;&nbsp; - &nbsp;&nbsp;ⵉⵍⵢⴰⵏ</CardTitle>
          <CardText>من خلال هذا المبيان يمكننا تتبع تطور انتشار الوباء ، و عدد الموتى</CardText>
          <Link to="/chart">
          <Button outline color="warning">مبيان الإحصائيات&nbsp;&nbsp; - &nbsp;&nbsp;ⵉⵍⵢⴰⵏ</Button>
          </Link>
        </Card>
      </Col>
      <Col xl="4" lg="6" >
      <br />
        <Card body className="card-stats mb-4 mb-xl-0">
          <CardTitle>مستجدات فيروس كورونا </CardTitle>
          <CardText >تتبع الحالة الوبائية حسب الدول</CardText>
          <UncontrolledDropdown group onChange={(e) => handleCountryChange(e.target.value)} defaultValue="" > 
          <DropdownToggle caret color="warning" value="" className="text-sm mr-2 text-muted " >
          pays&nbsp;&nbsp; - &nbsp;&nbsp;الدولة&nbsp;&nbsp; - &nbsp;&nbsp; ⵟⴰⵎⵎoⵓⵔⵜ
          </DropdownToggle>
          <DropdownMenu onClick={(e) => handleCountryChange(e.target.value)}
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    maxHeight: '300px',
                  },
                };
              },
            },
          }}
          >
              {countries.map((country, i) => 
            <DropdownItem  key={i} value={country} >
            {country}
            </DropdownItem>
           )}
          </DropdownMenu>
               </UncontrolledDropdown>
        </Card>
      </Col>
     
    </Row>
    </div>
        
    </Container>      
        </di>
        </>
    )
}

export default Countries;