import Header from './components/Header'
// import electronLogo from './assets/electron.svg'
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import WorkingArea from "./components/WorkingArea";



function App(): JSX.Element {
  return (
    <>
      <Header/>
      <LeftSidebar isOpen={true} />
      <RightSidebar />
      <WorkingArea />
    </>
  )
}

export default App
