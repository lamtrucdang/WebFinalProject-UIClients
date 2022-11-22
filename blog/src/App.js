import Home from "./page/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./page/single/Single"
import Write from "./page/write/Write"
import Settings from "./page/settings/Settings"
function App() {
  return (
    <div className="App">
      <TopBar/>
      {/* <Single/> */}
      {/* <Write/> */}
      <Settings/>
      <p></p>
    </div>
  );
}

export default App;