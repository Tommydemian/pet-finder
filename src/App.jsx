import { Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import SearchParams from './components/SearchParams'
import DetailsErrorBoundary from './pages/Details';
import { Details } from './pages/Details';


const queryClient = new QueryClient({
defaultOptions: {
  queries: {
    staleTime: Infinity, 
    cacheTime: Infinity, 
  }
}
});


function App() {
  return (
    // All it's actually doing is providing context to the components underneath it.
    <QueryClientProvider client={queryClient}> 
    <div className="App">
      <header>
      <Link to='/'>Adopt Me!</Link>
      </header>
      <Routes>
        <Route path={`/details/:id`} element={<Details />}></Route>
        <Route path={`/`} element={< SearchParams />}></Route>
      </Routes>
    </div>
    </QueryClientProvider>
  )
}

export default App
