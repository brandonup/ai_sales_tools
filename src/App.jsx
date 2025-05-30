import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AppBuilders from './pages/AppBuilders'; // Added AppBuilders import
import ApiKeys from './pages/ApiKeys';
import PromptExamples from './pages/PromptExamples';
import PresentationDeck from './pages/PresentationDeck';
import Instructions from './pages/Instructions'; // Renamed from Notes
import Toast from './components/Toast'; // Import Toast
import './styles/index.css'; // Will create this file next

function App() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // It seems the clipboard utility was planned but not used in TextBox.
  // For now, TextBox handles its own copy notification.
  // If a global toast is preferred, TextBox would need to call a function passed via props.
  // const showToast = (message) => {
  //   setToastMessage(message);
  //   setToastVisible(true);
  //   setTimeout(() => {
  //     setToastVisible(false);
  //     setToastMessage('');
  //   }, 2000);
  // };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app-builders" element={<AppBuilders />} /> {/* Added AppBuilders route */}
            <Route path="/api-keys" element={<ApiKeys />} />
            <Route path="/prompt-examples" element={<PromptExamples />} />
            <Route path="/presentation-deck" element={<PresentationDeck />} />
            <Route path="/instructions" element={<Instructions />} /> {/* Renamed from /notes */}
          </Routes>
        </main>
        {/* Toast component is available if needed for global notifications */}
        {/* <Toast message={toastMessage} visible={toastVisible} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
