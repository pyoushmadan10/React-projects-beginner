import UserContextProvider from './context/UserContextProvide'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
    <div className='text-3xl bold underline italic'>Hello world</div>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
