import { Fragment } from 'react';
import './App.css';
import { Switch as RouterSwitch, Route } from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import Privacy from './component/common/Privacy';
import TnC from './component/common/TnC';
import TokenAgreement from './component/common/TokenAgreement';
import Whitepaper from './component/common/Whitepaper';

import routes from './constants/routes.json';

const App = () => {
  return (
    <Fragment>
      {/* <Header /> */}

      <RouterSwitch>
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.PRIVACY_POLICY} component={Privacy} />
        <Route exact path={routes.TNC} component={TnC} />
        <Route exact path={routes.TOKEN_AGREEMENT} component={TokenAgreement} />
        <Route exact path={routes.WHITEPAPER} component={Whitepaper} />
      </RouterSwitch>

      {/* <Footer /> */}
    </Fragment>
  );
};

export default App;
