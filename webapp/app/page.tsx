import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar page={0} />
      <h1>Hello world</h1>
    </>
  );
}
