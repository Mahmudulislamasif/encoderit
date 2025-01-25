import Banner from "@/components/Home/Banner/Banner";
import Content from "@/components/Home/Content/Content";
import Logo from "@/components/Home/Logo/Logo";
import Testimonial from "@/components/Home/Testimonial/Testimonial";

import Layout from "@/components/Layouts/Layouts";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Content />
      <Testimonial />
      <Logo />
    </Layout>
  );
}
