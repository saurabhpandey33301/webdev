import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { SignUp } from "@repo/ui/signup";

export default function Home() {
  return (

    <>
      <SignUp/>
    </>

  );
}
