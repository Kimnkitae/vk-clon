import Header from './Layout/Header'
import SideBar from './Layout/SideBar'

import Feed from './Components/Feed'
import Bookmarks from './Components/Bookmarks'
import Profile from './Components/Profile'
import Messenger from './Components/Messenger'
import Calls from './Components/Calls'
import Friends from './Components/Friends'
import Communities from './Components/Communities'
import Photos from './Components/Photos'
import Music from './Components/Music'
import Clips from './Components/Clips'
import Games from './Components/Games'
import Stickers from './Components/Stickers'
import Market from './Components/Market'
import MiniApps from './Components/MiniApps'
import Votes from './Components/Votes'
import Files from './Components/Files'
import Help from './Components/Help'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header />
      <div className="container">
        <SideBar />

        <main>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/im' element={<Messenger />} />
            <Route path='/calls' element={<Calls />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/groups' element={<Communities />} />
            <Route path='/photos' element={<Photos />} />
            <Route path='/audios' element={<Music />} />
            <Route path='/clips' element={<Clips />} />
            <Route path='/games' element={<Games/>} />
            <Route path='/stickers' element={<Stickers />} />
            <Route path='/market' element={<Market />} />
            <Route path='/services' element={<MiniApps />} />
            <Route path='/votes' element={<Votes />} />
            <Route path='/bookmarks' element={<Bookmarks />} />
            <Route path='/docs' element={<Files />} />
            <Route path='/support' element={<Help />} />
          </Routes>
        </main>
        
      </div>

    </BrowserRouter>
    </>
  )
}

export default App
