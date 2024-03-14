
// import { Route, Routes } from 'react-router-dom';
// import Book from './components/Book';
// import Home from './components/Home';

// function App() {
//   return (
//     <>
//     <ul>
//       <li><Link to='/'>Home</Link></li>
//       <li><Link to='book'>Book</Link></li>
//       </ul>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='book' element={<Book/>}/>
//     </Routes>
//     </>
//   );
// }

// export default App;


import {Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home';
// import SignUp from './components/SignUp';
// import Portfolio from './components/Portfolio';
import UserPoll from './components/UserPoll';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <>
    {/* <ul>
    <li><Link to='/'>Home</Link></li>
      <li><Link to='/book'>Books</Link></li>
      <li><Link to='/portfolio'>Portfolio</Link></li>

      </ul> */}
   <ul>
        <li style={{float: 'left'}}><Link to='/'>Survey/Polling Tool</Link></li>
        <li style={{float: 'right'}}><Link to='/sign'>SignIn/Up</Link></li>
        <li style={{float: 'right'}}><Link to='/poll'>Demo</Link></li>
       
        <li style={{float: 'right'}}><Link to='/'>Home</Link></li>
        
    </ul>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='sign' element={<LoginForm />} />
      <Route path='poll' element={<UserPoll />} />
    </Routes>
    </>
  );
}

export default App;

// import React, { useState} from 'react';
// import Toolbar from './components/Toolbar';

// function App()
// {
//   const [theme, setTheme] =useState('Light' );

//   const toggleTheme = () => {
//     setTheme(prevTheme => prevTheme === 'Light' ? 'dark' : 'Light');
//   };

//   return (
//     <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
//       <Toolbar theme={theme} toggleTheme={toggleTheme} />
//    </div>
//   );
// }

// export default App;