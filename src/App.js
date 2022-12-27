import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText = "About TextUtils" /> */}

      <Navbar title="ConvertCase" />
      <div className="container" my-3="true">
        <TextForm heading="Accidentally left the CAPS LOCK on and typed something, but can't be bothered to start again and retype it all? Simply enter your text here."/>
      </div>
    </>
  );
}

export default App;
