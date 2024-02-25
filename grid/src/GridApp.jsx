import './GridApp.css'
import UsersTable from './UsersTable/UsersTable';
import { QueryClient, QueryClientProvider } from 'react-query';

function GridApp() {
  const queryClient = new QueryClient();
  return (
    <>  
     <QueryClientProvider client={queryClient}>
        <UsersTable />
     </QueryClientProvider>
    </>
  )
}

export default GridApp
