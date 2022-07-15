import React, { Component } from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Sidebar2 from './Components/Global/SideNav/Sidebar2';
import Users from './Components/Pages/Users';
import Login from './Components/Pages/Login';
import Statistic from './Components/Pages/Statistic';
import Message from './Components/Pages/Message';
import Dashboard from './Components/Pages/Dashboard';
import Bookmark from './Components/Pages/Bookmark';
import Files from './Components/Pages/Files';
import Signup from './Components/Pages/Signup';

class App extends Component {
render() {
	return (
    <BrowserRouter>
		<Sidebar2/>
		<Routes>
				<Route exact path='/' element={<Dashboard/>} />
				<Route path='/message' element={< Message />} />
				<Route path='/user' element={< Users />} />
				<Route path='/file' element={< Files />} />
				<Route path='/bookmark' element={< Bookmark />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/stats' element={<Statistic />} />
		</Routes>
    </BrowserRouter>
);
}
}

export default App;
