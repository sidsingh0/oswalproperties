import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Hero = ({ data }) => {
  console.log(data);
  console.log(data[0].attributes.BannerText);
  const router = useRouter();
  const [key, setKey] = useState("rent");
  const [query, setQuery] = useState("");
  const querySearchHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const submitHandlerRent = (e) => {
    e.preventDefault();
    router.push(`/search-rent?query=${query}`);
  };
  const submitHandlerSale = (e) => {
    e.preventDefault();
    router.push(`/search-sale?query=${query}`);
  };

  return (
    <div className="hero d-flex" style={{height: '90vh'}}>
      <div className="container d-flex align-items-center">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h1 className="display-3">{data[0].attributes.BannerText}</h1>
            <h3 style={{fontWeight: '400'}} className="mb-4 fs-5">{data[0].attributes.BannerSubtitle}</h3>
            <div className="hero-button mb-5">
              <Link href="/all-property" className="button-primary">
                Explore Properties
              </Link>
              <Link href="/contact" className="button-secondary">
                Contact us
              </Link>
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="hero__image"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
