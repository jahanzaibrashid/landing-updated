
import { Fragment } from 'react';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Middle from './component/Middle';
import Forms from './component/Forms';
import Footer from './component/Footer';

const App = () => {
    return (
      <Fragment>
        <Header />
        <Banner />
        <Middle />
        <Forms />
        <Footer />
      </Fragment>
    )
}

export default App;
