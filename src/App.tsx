import Calculator from './domain/calculator';

const App = () => (
  <div
    style={{
      backgroundColor: '#282c34',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Calculator />
  </div>
);

export default App;
