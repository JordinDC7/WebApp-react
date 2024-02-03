import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/rockshopcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function MapRocks({ rockState }) {
  // console.log("This is rockstate", rockState);

  const rocksArray = Array.isArray(rockState)
    ? rockState
    : Object.values(rockState);
  // console.log("this is rocksArray", rocksArray);

  return (
    <div>
      <div className="cards-wrapper">
        {rocksArray.map((rock) => (
          <div className="card mb-3" key={rock.id}>
            <div className="row g-0">
              <div className="col-12">
                <img
                  src={rock.image}
                  className="img-fluid rounded-top rock-image"
                  alt="rock"
                />
              </div>
              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title">{rock.name}</h5>
                  <p className="card-text">
                    Rock/Mineral Description placeholder.
                  </p>
                  <p>Price: ${rock.price}</p>
                  <p>In-Stock: {rock.isInStock ? "True" : "False"}</p>
                  <p>On-Sale Price: {rock.salePrice}</p>
                  <small className="text-body-secondary">
                    Last updated 3 mins ago (placeholder currently)
                  </small>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-primary">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapRocks;
