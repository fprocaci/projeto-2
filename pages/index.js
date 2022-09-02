import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HomePage from "./homePage";
import Services from "./services";
import Work from "./work";
import Clientes from "./clientes";
import Contato from "./contatos";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FPS - Developer</title>
        <meta
          name="description"
          content="Site criado para apresentação de portifólio"
        />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Navbar />
      <HomePage />
      <Services />
      <Work />
      <Clientes />
      <Contato />
      <Footer />
    </div>
  );
}
