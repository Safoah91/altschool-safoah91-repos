import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Repo from './components/Repo'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'
import ErrorBoundary from './components/ErrorBoundary'

const LazyUser = React.lazy(() => import('./components/ShowErrorBoundary'))

function App() {

  return (
    <div>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/repo/:id' element={<Repo />} />
          <Route path='/show-error-boundary' element={
            <React.Suspense fallback={<LazyUser />}>
              <LazyUser />
            </React.Suspense>
          }
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default App;
