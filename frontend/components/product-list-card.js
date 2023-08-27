import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiBathtub } from "react-icons/gi";
import { MdBed, MdCall } from "react-icons/md";
import { API_URL } from "../config";
import Link from "next/link";

const ProductListCard = ({ property }) => {
  const {
    image,
    price,
    slug,
    title,
    location,
    phone,
    beds,
    baths,
    propertyType,
  } = property?.attributes;

  return (
    <>
      <div className="property col-12 mb-4">
        <div className="list-view">
          <div className="row" style={{alignItems: "center",justifyContent: "center"}}>
            <div className="col-md-5">
              <div className="list-view--image h-100">
                <img
                  className="img-fluid"
                  src={
                    image?.data !== null
                      ? `${API_URL}${image?.data[0]?.attributes.url}`
                      : "/images/404.jpg"
                  }
                  alt={title}
                />
                {propertyType !== null && (
                  <div className="popular">{propertyType}</div>
                )}
                <div className="type"></div>
              </div>
            </div>
            <div className="col-md-7 col-lg-6 ">
              <div className="list-view__info">
                <div className="list-view__info--title">
                  <h3 style={{margin:"0",padding:"0"}}>
                    <Link className="property-name" href={`/property/${slug}`} >
                      {property.attributes.title}
                    </Link>
                  </h3>
                  <p style={{color:"#2a6496",margin:"0"}}>{property.attributes.type}</p>
                </div>
                <div className="list-view__info--price"><span style={{fontSize:"14px",fontWeight:"400"}}>₹</span>{price}<span  style={{fontSize:"14px",fontWeight:"400"}}> onwards</span></div>
                <ul className="list-view__info--list">
                  <li>
                    <GoLocation /> {location}
                  </li>
                </ul>
                <ul className="list-view__info--expert">
                  {property.attributes.type == "Residential" && (
                    <li style={{padding:"0px!important"}} >
                      <MdBed /> {beds} Beds
                    </li>
                  )}
                  {property.attributes.type == "Residential" && (
                  <li>
                    <GiBathtub /> {baths} Baths
                  </li>
                  )}
                  
                  <li>
                    <MdCall /> <Link href={`tel${phone}`}>{phone}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListCard;
