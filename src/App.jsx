import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className='h-screen w-screen p-4 mt-12'>
        <Home />
      </main>
    </>
  )
}
export default App
