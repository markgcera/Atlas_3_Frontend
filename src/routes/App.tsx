import { useWindowSize } from "@uidotdev/usehooks";

import MobileLoginContainer from "components/authentication/MobileLoginContainer.tsx";
import WebLoginContainer from "components/authentication/WebLoginContainer.tsx";
import { BREAKPOINTS } from "components/constants.tsx";


const App = () => {
    const size = useWindowSize();
    return size.width && size.width <= BREAKPOINTS.MD ? <MobileLoginContainer/> : <WebLoginContainer/>;
};

export default App