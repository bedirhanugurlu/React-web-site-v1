import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

//Google Analytics Kodu 
// import ReactGA from 'react-ga';

// function initalGa() {
//   ReactGA.initialize('UA-00000000-1');
//   ReactGA.pageview('window.location');
// }

//Facebook Pixels Kodları
// import ReactPixel from 'react-facebook-pixel';

// const advancedMatching = { em: 'some@email.com' }; 
// const options = {
//   autoConfig: true, 
//   debug: false, 
// };
// ReactPixel.init('yourPixelIdGoesHere', advancedMatching, options);

// ReactPixel.pageView(); 
// ReactPixel.track("event", "data");
// ReactPixel.trackSingle('PixelId', "event", "data"); 
// ReactPixel.trackCustom("event", "data"); 
// ReactPixel.trackSingleCustom('PixelId', "event", "data"); 

//Tag Manager Kodu
// import TagManager from 'react-gtm-module'
 
// const tagManagerArgs = {
//     gtmId: 'GTM-000000'
//     dataLayer: {
//       userId: '001',
//       userProject: 'project'
//     }
// }

// TagManager.initialize(tagManagerArgs)

function App() {

  // useEffect (() =>  {
  //   const ReactPixel =  require('react-facebook-pixel');
  //   ReactPixel.default.init('yourPixelIdGoesHere');
  // })

  return (
    <>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/services' component={Services} /> 
       <Route path='/products' component={Products} />
       <Route path='/sign-up' component={SignUp} />
     </Switch>
     </Router>

    </>
  );
}

export default App;
