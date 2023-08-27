import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../components/global/layout";
import Hero from "../components/hero";
import FeaturedListing from "../components/featured-listing";
import WhyChooseUs from "../components/why-choose-us";
import PropertyListing from "../components/property-listing";
import ContactSection from "../components/ContactSection";
import Testimonial from "../components/testimonial";
import ProgressBar from "../components/global/ProgressBar";
import { API_URL } from "../config";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ property, heroData }) {
  const { data } = property;

  return (
    <Layout>
      <ProgressBar />
      <Hero data={heroData.data} />
      <FeaturedListing data={data} />
      <WhyChooseUs />
      <PropertyListing data={data} />
      <ContactSection />
    </Layout>
  );
}
``;
export async function getStaticProps() {
  // const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const res = await fetch("http://127.0.0.1:1337/api/properties?populate=*");
  const res2 = await fetch("http://127.0.0.1:1337/api/herobanners?populate=*");
  const property = await res.json();
  const heroData = await res2.json();
  return {
    props: { property, heroData },
  };
}
