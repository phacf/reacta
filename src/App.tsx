import { IconComponent, FooterMenu } from "./Components";
import { Screen } from "./Containers/Screen";

import './index.css';


function App() {

  return (
    <div className="bg-gradient-to-r  w-screen h-screen from-primary-700 flex justify-center items-center to-primary-650">
      <Screen>

      <IconComponent iconName="myPc" />
      <FooterMenu />
      </Screen>
    </div>
  );
}

export default App;
