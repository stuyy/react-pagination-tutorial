export const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <td>ID #</td>
          <td>Title</td>
          <td>Author</td>
          <td>Year Published</td>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => (
          <tr key={result.id}>
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.author}</td>
            <td>{result.yearPublished}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
