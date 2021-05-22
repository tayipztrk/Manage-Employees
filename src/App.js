import EmployeeList from './components/EmployeeList';
import EmloyeeContextProvider from './contexts/EmployeeContext';


function App() {
  return (
    <div className="App">
      <div className="container-x1">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmloyeeContextProvider>
              <EmployeeList/>
            </EmloyeeContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
