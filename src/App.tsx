import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          My<span> alert</span>
        </Alert>
      )}
      <Button color="light" onClick={() => setAlertVisibility(true)}>
        Click the Button for an Alert
      </Button>
    </div>
  );
}

export default App;
