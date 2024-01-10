import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/navbar/Navbar";
import Homepage from "@/components/homepage/Homepage";
import Section_2 from "@/components/section_2/Section_2";
import Service from "@/components/service/Service";
import Section_4 from "@/components/section_4/Section_4";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
      <>
      <Navbar/>
      <Homepage/>
      <Section_2/>
      <Service/>
      <Section_4/>
      <Footer/>
      </>   
  )
}
