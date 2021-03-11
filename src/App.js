import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
const appStyle = {
  margin: '0 2%',
};
function App() {
  return (
    <div className="App" style={appStyle}>
      {/* <Header /> */}
      <Intro />
      <Portfolio />
    </div>
  );
}

export default App;
