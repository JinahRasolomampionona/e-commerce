import React from 'react';
import Header from '../header';
import Navbar from './navbar';
import Model from './model';

const Home: React.FC = () => {

    return(
        <Header>
            <Navbar />
            <Model />
        </Header>
    )
}
export default Home;