import { BrowserRouter} from 'react-router-dom';
import AppLayout from './layout/AppLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (  
    <BrowserRouter>
      <AppLayout/>
    </BrowserRouter>   
  );
}

export default App;
