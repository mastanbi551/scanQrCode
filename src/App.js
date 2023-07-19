import logo from './logo.svg';
import './App.css';
import QRCode from "qrcode.react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginTop: 200, display: "flex",flexDirection: "row" }}>
         <div>
            <QRCode
               value="https://qrcodeapp-975af.web.app/"style={{ marginRight: 50 }}/>
            <p>For Invitation Scan QR Code</p>
         </div>
        </div>
      </header>
    </div>
  );
}

export default App;
