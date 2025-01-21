import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./components/theme-provider";

import Upload from "./pages/Upload";
import HowItWorks from "./pages/HowItWorks";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import { WalletProvider } from "./context/WalletContext";

function App() {
  return (
    <WalletProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="upload" element={<Upload />} />
              <Route path="how-it-works" element={<HowItWorks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </WalletProvider>
  );
}

export default App;
