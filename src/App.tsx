import DynamicTable from "./components/dynamic-table/dynamic.table";

function App(): JSX.Element {
  return (
    <div>
      <h1>table</h1>

      <DynamicTable url="http://localhost:3004/data" /> 

    </div>
  );
}

export default App;