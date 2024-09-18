// import logo from './logo.svg';

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze Below" />
      </div>
    </>
  );
}

export default App;
