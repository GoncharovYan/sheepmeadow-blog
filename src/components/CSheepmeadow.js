import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components-ui/CHeader';
import Main from './Welcome/CMain';
import Footer from '../components-ui/CFooter';
import "../scss/sheepmeadow.scss";
import CommunityContainer from './Community/CCommunityContainer';
import BlogContainer from './Blog/CBlogContainer';
import UserContainer from './User/UserContainer';


function Sheepmeadow(props) {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header />
                <div className='main'>
                    <Routes>
                        <Route path='/blog/*' element={<BlogContainer />} />
                        <Route path='/community/*' element={<CommunityContainer />}/>
                        <Route path='/user/*' element={<UserContainer />}/>
                        <Route path='/' element={<Main
                            welcome={props.state.welcome}
                            cards={props.state.games.cards}/>}/>
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default Sheepmeadow;