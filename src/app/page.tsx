import Banner from "@/components/Home/Banner/Banner";
import Content from "@/components/Home/Content/Content";
import Logo from "@/components/Home/Logo/Logo";
import Layout from "@/components/Layouts/Layouts";
import Image from "next/image";

export default function Home() {
  return (
   <Layout>
    <Banner/>
    <Content/>
    <Logo/>
   </Layout>
  );
}
