import WebLoginContainer from './components/authentication/WebLoginContainer.tsx';
import MobileLoginContainer from "./components/authentication/MobileLoginContainer.tsx";
import { useWindowSize } from "@uidotdev/usehooks";
import { BREAKPOINTS } from "./components/constants.tsx";

function App() {
  const size = useWindowSize();
  return size.width! <= BREAKPOINTS.MD ? <MobileLoginContainer/> : <WebLoginContainer/>
}

export default App
