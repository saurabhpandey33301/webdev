import Image from "next/image";
import {VideoGrid} from "../components/VedioGrid";
import {AppBar} from "../components/Appbar";
import { Navbar } from "@/components/Navbar";
export default function Home() {
  return (
      <div>
          <AppBar></AppBar>
          <div className="flex">
            <Navbar></Navbar>
            <VideoGrid></VideoGrid>
          </div>
          
      </div>
  );
}
