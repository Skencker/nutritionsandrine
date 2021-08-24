import './App.css';
import Site from './containers/Site/site';
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div >
            <BrowserRouter>
              <Site/>
            </BrowserRouter>
        </div>
    );
}

export default App;
