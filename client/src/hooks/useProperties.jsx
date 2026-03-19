import React from "react";
import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = () => {
  // Mocking TurboTenant properties to render in the native horizontal Swiper/Grid
  const data = [
    {
      id: "turbo-1",
      title: "Room for Rent with Shared Bathroom",
      price: 550,
      description: "428 n lakewood ave baltimore, MD 21224. 1 Bedroom, 1 Bath. Move-In Special 100% First Month.",
      image: "./r1.png",
      city: "Baltimore",
      country: "USA",
      userEmail: "leasing@definingfinancial.com"
    },
    {
      id: "turbo-2",
      title: "Room for Rent with Shared Bathroom",
      price: 800,
      description: "428 n lakewood ave baltimore, MD 21224. 1 Bedroom, 1 Bath. Move-In Special 100% First Month.",
      image: "./r2.png",
      city: "Baltimore",
      country: "USA",
      userEmail: "leasing@definingfinancial.com"
    },
    {
      id: "turbo-3",
      title: "Basement Room!!! - Available",
      price: 950,
      description: "7301 Calder Drive Capitol Heights, MD 20743. 1 Bedroom, 1 Bath. Townhouse.",
      image: "./r3.png",
      city: "Capitol Heights",
      country: "USA",
      userEmail: "leasing@definingfinancial.com"
    }
  ];

  return {
    data,
    isError: false,
    isLoading: false,
    refetch: () => {},
  };
};

export default useProperties;
