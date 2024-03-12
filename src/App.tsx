import {Page, Screen } from "./Containers";

import './index.css';


function App() {

  return (
    <div className="bg-gradient-to-r  w-screen h-screen from-primary-700 flex justify-center items-center to-primary-650">
      <Screen>
        <Page>

        <iframe src="https://medium.com/@paulo.fernandes_27955/teste-fbc5adea3905" />
        </Page>
       </Screen>
    </div>
  );
}

export default App;
