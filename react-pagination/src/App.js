import { Table } from './components/Table';
import { usePagination } from './hooks/usePagination';
import { fetchBooks } from './utils/api';

function App() {
  const { results, nextPage, prevPage, canNextPage, canPrevPage } =
    usePagination(10, fetchBooks);
  
  return (
    <div>
      <Table results={results} />
      <button onClick={prevPage} disabled={!canPrevPage()}>
        Prev
      </button>
      <button onClick={nextPage} disabled={!canNextPage()}>
        Next
      </button>
    </div>
  );
}

export default App;
