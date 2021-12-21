import { SessionC } from './Contexts/SessionContext';

import './App.scss';

import {Routes} from './routes/routes'
function App() {

    return (
    <SessionC>
         <Routes/>

    </SessionC>

  );
}

export default App;
