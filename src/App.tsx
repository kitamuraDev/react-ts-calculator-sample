import Calculator from './domain/calculator';

const App = () => (
  <div
    style={{
      backgroundColor: '#282c34',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
    }}
  >
    <Calculator />
  </div>
);

export default App;
