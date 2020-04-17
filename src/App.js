import React from 'react';

import{ BrowserRouter as Router ,Route ,Switch  } from 'react-router-dom';
import NavBar from './Component/Layout/NavBar';
import Cards from './Component/Cards/Cards';
import { fetchData } from './api';
import Welcome from './Component/Layout/Welcome';
import Numero from './Component/Layout/Numero';
import Footer from './Component/Layout/Footer';
import Charts from './Component/Charts/Charts';
import CountryDetails from './Component/CountryDetails/CountryDetails';


class App extends React.Component {
  state = {
    data: {},
    country: '',
    
  }
  

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
    
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    
    this.setState({ data, country: country });
  }




  
  render() {
    const { data, country} = this.state;
    
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="container">
        <Welcome />
        <Cards data={data}/>
        <CountryDetails handleCountryChange={this.handleCountryChange} />
        
        <Switch>
          <Route path="/chart">
        <Charts data={data} country={country} />
        </Route>
        </Switch>
        
        
        
        <Numero />
        </div>
        <Footer />
    </div>
    </Router>
  );
}
}

export default App;
