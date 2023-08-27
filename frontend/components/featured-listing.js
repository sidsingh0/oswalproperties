import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import SectionTitle from "./global/section-title";
import PropertyCard from "./property-card";

const FeaturedListing = ({ data }) => {
  console.log(data);
  const [key, setKey] = useState("residential");
  const featured = data?.filter(
    (property) => property.attributes.propertyType === "featured"
  );

  const propertyCommercial = featured?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname !==
      "Residential"
  );
  const propertyResidential = featured?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname ===
      "Residential"
  );

  return (
    <div className="featured-list section-padding">
      <div className="container">
        <SectionTitle title="Featured Listings" />
        <div className="featured-listing__wrapper">
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            id="controlled-tab-example-listing"
          >
            
            <Tab eventKey="residential" title="Residential">
              <div className="row justify-content-center">
                {data === null || undefined || 0 ? (
                  <span className="error">property not available for sale</span>
                ) : null}
                {propertyResidential?.slice(0, 3).map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </div>
            </Tab>
            <Tab eventKey="commercial" title="Others">
              <div className="row justify-content-center">
                {data === null || undefined || 0 ? (
                  <span className="error">property not available for rent</span>
                ) : null}
                {propertyCommercial?.slice(0, 3).map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListing;
