import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './views/main/Main'
import Nav from './views/nav/Nav'
import Profile from './views/profile/Profile'
import SearchBar from './views/search-bar/SearchBar'


function App() {

  return (
    <Router>
      <>
        <Nav />
        <main>
          <SearchBar />
          
          <section className='main-content'>
            <Main />
            <Profile />
          </section>
        </main>
      </>
    </Router>
  )
}

export default App
