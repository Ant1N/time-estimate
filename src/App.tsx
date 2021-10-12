import React from 'react';
import './App.css';
import Form from './components/Form';

<<<<<<< Updated upstream
function App() {
=======
interface IPost {
  id: number;
  title: string;
}

const defaultPosts: IPost[] = [];

const App = () => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(
    defaultPosts
  );

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );

  const cancelToken = axios.CancelToken; //create cancel token
  const [cancelTokenSource, setCancelTokenSource]: [
    CancelTokenSource,
    (cancelTokenSource: CancelTokenSource) => void
  ] = React.useState(cancelToken.source());

  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('User cancelled operation');
    }
  };

  React.useEffect(() => {
    axios
      .get<IPost[]>('https://api.github.com/repos/Ant1N/time-estimate/issues', {
        cancelToken: cancelTokenSource.token,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? 'Request Cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource Not Found'
          : 'An unexpected error has occurred';

        setError(error);
        setLoading(false);
      });
  }, []);

  // Function to handle when new estimated is saved (after button click)

  function handleSaveEstimate() {
    console.log("Estimate (not yet) saved! (but it's supposed to when this function is done :))");
  }

>>>>>>> Stashed changes
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Form estimate={1} handleSaveEstimate={handleSaveEstimate} />
    </div>
);
}

export default App;
