import {
  Delete,
  Phone,
  RateReview,
  Restaurant,
  Savings
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

import React from "react";
import { NavLink, useParams } from "react-router-dom";

const ProtectedRestaurantShow = ({
  restaurants,
  current_user,
  deleteRestaurant,
}) => {
  const { user_id, id } = useParams();
  const currentRestaurant = restaurants?.find(
    (restaurant) => restaurant.id === +id
  );

  const handleDelete = () => {
    deleteRestaurant(id);
  };

  return (
    <div className="page-container">
      <h1>Restaurant Details</h1>
      {current_user.id === parseInt(user_id) && currentRestaurant && (
        <>
          <Card
            elevation={24}
            sx={{ width: 650, border: "5px solid #AD8350", mb: "1rem" }}
          >
            <CardMedia
              component="img"
              height="400px"
              image={currentRestaurant.image}
              alt="restaurant"
            />
            <div className="show-card-container">
              <CardContent>
                <CardContent>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    <Restaurant /> {currentRestaurant.name}
                  </Typography>
                  <div className="show-card-container">
                    <div className="show-card-info">
                      <Typography
                        sx={{ fontSize: "1.4rem", fontWeight: "bold" }}
                        gutterBottom
                        variant="h7"
                        component="div"
                      >
                        {currentRestaurant.food_type}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "1.2rem" }}
                        gutterBottom
                        variant="h7"
                        component="div"
                      >
                        <Savings sx={{ verticalAlign: "bottom" }} />{" "}
                        {currentRestaurant.price}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "1.2rem" }}
                        gutterBottom
                        variant="h7"
                        component="div"
                      >
                        <Phone sx={{ verticalAlign: "bottom" }} />{" "}
                        {currentRestaurant.phone_number}
                      </Typography>

                      <div className="card-address-container">
                        <Typography
                          sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          Address:
                        </Typography>

                        <Typography
                          sx={{ fontSize: "1.2rem" }}
                          gutterBottom
                          variant="h7"
                          component="div"
                        >
                          {currentRestaurant.street}
                        </Typography>
                        <div className="horizontal-flex-container">
                          <Typography
                            sx={{ fontSize: "1.2rem" }}
                            gutterBottom
                            variant="h7"
                            component="div"
                          >
                            {currentRestaurant.city},
                          </Typography>
                          &nbsp;
                          <Typography
                            sx={{ fontSize: "1.2rem" }}
                            gutterBottom
                            variant="h7"
                            component="div"
                          >
                            {currentRestaurant.state}
                          </Typography>
                          &nbsp;
                          <Typography
                            sx={{ fontSize: "1.2rem" }}
                            gutterBottom
                            variant="h7"
                            component="div"
                          >
                            {currentRestaurant.zip}
                          </Typography>
                        </div>
                      </div>

                      <Typography
                        sx={{ fontSize: "1.2rem" }}
                        gutterBottom
                        variant="h7"
                        component="div"
                      >
                        <a href={`${currentRestaurant.website}`}>
                          Visit Their Website{" "}
                        </a>
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </CardContent>
            </div>
          </Card>

          <div className="horizontal-flex-container">
            <Button
              variant="contained"
              sx={{
                color: "white",
                padding: "12px",
                bgcolor: "#55AF4D",
              }}
            >
              <RateReview />
              &nbsp;REVIEW RESTAURANT
            </Button>
            &nbsp; &nbsp;
            <NavLink
              to={`../protectedrestaurantindex`}
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={handleDelete}
                variant="contained"
                sx={{
                  color: "white",
                  padding: "12px",
                  bgcolor: "#55AF4D",
                }}
              >
                <Delete />
                &nbsp;REMOVE RESTAURANT
              </Button>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default ProtectedRestaurantShow;
