import { StatusBar } from "expo-status-bar";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <>
      <Tasks />
      <StatusBar style="auto" />
    </>
  );
}
