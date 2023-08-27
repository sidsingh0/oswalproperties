import Skeleton from "react-loading-skeleton";
import Layout from "../../components/global/layout";
import PropertyCard from "../../components/property-card";
import { API_URL } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SectionTitle from "../../components/global/section-title";
import {
  MdBed,
  MdOutlineKeyboardArrowLeft,
  MdOutlineNavigateNext,
} from "react-icons/md";
import { GiBathtub, GiMechanicGarage } from "react-icons/gi";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaVoteYea,
} from "react-icons/fa";
import md from "markdown-it";

const PropertyPage = ({ properties, slug }) => {
  const property = properties?.filter((data) => data?.attributes.slug === slug);

  const {
    image,
    price,
    title,
    description,
    rating,
    location,
    date,
    beds,
    baths,
    user,
    propertyType,
    categories,
    FloorPlan,
  } = property[0]?.attributes;

  const relatedProperty = properties?.filter(
    (data) =>
      data?.attributes.categories.data[0]?.attributes.categoryname ===
      categories?.data[0]?.attributes.categoryname
  );

  const floorPlanData = FloorPlan.data;
  floorPlanData.map((floorPlan) => {
    console.log(floorPlan);
  });
  return (
    <Layout title="Property Details">
      {property === null ? (
        <div className="loader">
          <Skeleton />
        </div>
      ) : (
        <div
          className="single-page"
          style={{ backgroundColor: "#f5f5f5!important" }}
        >
          <div className="row" style={{ marginRight: "0px" }}>
            <div
              className="col-12"
              style={{ paddingRight: "0px", height: "400px" }}
            >
              <Swiper
                className="single-page__swiper"
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                autoplay
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                }}
                style={{ height: "100%" }}
              >
                {image.data === null ? "Image not available" : ""}
                {image?.data.map((images) => (
                  <SwiperSlide
                    key={images.id}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className="w-100"
                      src={`${API_URL}${images.attributes.url}`}
                      alt={title}
                    />
                  </SwiperSlide>
                ))}
                <div className="prev" style={{position:"absolute",top:"50%",left:"30px"}}>
                  <MdOutlineKeyboardArrowLeft />
                </div>
                <div className="next" style={{position:"absolute",top:"50%",right:"00px"}}>
                  <MdOutlineNavigateNext />
                </div>
              </Swiper>
            </div>
          </div>
          <div className="container">
            <div className="single-page__top" style={{ paddingBottom: "0px" }}>
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "0px",
                }}
              >
                {title}{" "}
                <span style={{ borderRadius: "10px", padding: "5px 10px" }}>
                  {propertyType}
                </span>
              </h3>
              <p>{location}</p>
              <span className="price">
                <span style={{ fontSize: "18px" }}>₹</span>
                {price}
                <span style={{ fontWeight: "400", fontSize: "18px" }}>
                  {" "}
                  onwards
                </span>{" "}
              </span>
              <ul>
                {/* <li>
                  <span>
                    <AiFillStar />
                    {rating}
                  </span>
                  5 Reviews
                </li> */}
              </ul>
            </div>
          </div>
          <div className="section-bg" style={{ marginTop: "40px" }}>
            <div className="container">
              <div className="row" style={{ marginRight: "0px" }}>
                <div className="col-md-6">
                  <div className="description-card">
                    <div className="description-card__header">
                      <h4>Property Details</h4>
                    </div>
                    <div className="description-card__body">
                      <ul>
                        <li>
                          <span>
                            <MdBed />
                            Beds:<span style={{ margin: "0" }}> {beds}</span>
                          </span>{" "}
                        </li>
                        <li>
                          <span>
                            <GiBathtub />
                            Bathrooms:
                            <span style={{ margin: "0" }}> {baths}</span>
                          </span>{" "}
                        </li>
                        <li style={{ margin: "0" }}>
                          <span>
                            <FaVoteYea />
                            Built Year:
                            <span style={{ margin: "0" }}>
                              {new Date(date).toLocaleDateString("en-US")}
                            </span>
                          </span>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  {description === null ? (
                    ""
                  ) : (
                    <div className="description-card">
                      <div className="description-card__header">
                        <h4>Description</h4>
                      </div>
                      <div className="description-card__body">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: md().render(description),
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-6" id="floorplan-container">
                  {floorPlanData && (
                    <div className="description-card">
                      <div className="description-card__header">
                        <h4>Floor Plan</h4>
                      </div>
                      <div className="description-card__body">
                        <Swiper
                          className="single-page__swiper"
                          modules={[Navigation, Autoplay]}
                          spaceBetween={10}
                          autoplay
                          pagination={{ clickable: true }}
                          navigation={{
                            prevEl: ".prev",
                            nextEl: ".next",
                          }}
                          breakpoints={{
                            576: {
                              slidesPerView: 1,
                            },
                            992: {
                              slidesPerView: 1,
                            },
                            1200: {
                              slidesPerView: 1,
                            },
                          }}
                        >
                          {floorPlanData.map((images) => (
                            <SwiperSlide key={images.id}>
                              <div className="floor-plain-image-container">
                                <img
                                  className="floor-plan__image"
                                  src={`${API_URL}${images.attributes.url}`}
                                  alt={title}
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="similar">
            <div className="featured-list section-padding">
              <div className="container">
                <SectionTitle position="left" title="Similar Properties" />
                <div className="featured-listing__wrapper">
                  <div className="row" style={{ marginRight: "0px" }}>
                    {relatedProperty?.slice(0, 3).map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PropertyPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const allProperty = await res.json();
  const properties = allProperty.data;

  return {
    props: {
      properties,
      slug,
    },
  };
}
