import './App.css'
import UsersTable from './UsersTable/UsersTable';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <>  
     <QueryClientProvider client={queryClient}>
        <UsersTable />
     </QueryClientProvider>
    </>
  )
}

export default App
