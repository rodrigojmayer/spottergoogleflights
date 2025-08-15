import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import Layout from './components/Layout';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/results"
        element={
          <Layout>
            <Results />
          </Layout>
        }
      />
        {/* <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
