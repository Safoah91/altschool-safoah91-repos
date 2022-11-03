import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Repo from './components/Repo'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'
import ErrorBoundary from './components/ErrorBoundary'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/repo/:id' element={<Repo />} />
        <Route path='/error-boundary' element={<ErrorBoundary />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
