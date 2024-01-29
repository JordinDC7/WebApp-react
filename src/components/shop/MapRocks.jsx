import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/rockshopcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function MapRocks({ rockState }) {
  console.log("This is rockstate", rockState);
  const rocksArray = Array.isArray(rockState)
    ? rockState
    : Object.values(rockState);
  console.log("this is rocksArray", rocksArray);

  return (
    <div>
      {rocksArray.map((rock) => (
        <div className="card-container">
          <Card
            key={rock.id}
            className="card-img-bg card"
            style={{ width: "16rem" }}
          >
            <Card.Img src={rock.image} variant="top" className="rock-images" />
            <Card.Body className="card-body">
              <Card.Title as="h5">{rock.name}</Card.Title>
              <Card.Text>Category: {rock.category}</Card.Text>
              <Card.Text>Price: {rock.price}</Card.Text>
              <Card.Text>
                {rock.salePrice ? `Sale Price: ${"$" + rock.salePrice}` : null}
              </Card.Text>
              <Button color="primary" size="sm" className="cart-btn">
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default MapRocks;
