import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Components from "./routes/Components";
import { NotificationProvider } from "./context/notificationsContext";
import { UserProvider } from "./context/userContext";
import Notification from "./commonComponents/Notification";

export default function App() {
  return (
    <UserProvider>
      <NotificationProvider>
        <Notification />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Components />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </UserProvider>
  );
}
