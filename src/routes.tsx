import ToolList from "@/pages/ToolList";
import { Route, Routes } from "react-router-dom";
import LEDBoard from "./pages/LEDBoard";
import Settings from "./pages/Settings";
import SplitBill from "./pages/SplitBill";
import Templates from "./pages/Templates";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ToolList />} />
      <Route path="/toollist" element={<ToolList />} />
      <Route path="/splitbill" element={<SplitBill />} />
      <Route path="/ledboard" element={<LEDBoard />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
