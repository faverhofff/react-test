import DynamicTable from "./components/dynamic-table/dynamic.table";

function App(): JSX.Element {
  return (
    <div>
      <h1>table</h1>

      <div className="container">
        <DynamicTable url="http://localhost:3004/575/1" />
      </div> 

    </div>
  );
}

export default App;