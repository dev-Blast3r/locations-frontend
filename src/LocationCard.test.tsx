// src/LocationCard.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import LocationCard from "./LocationCard";
import { Location } from "./types";

const mockLocation: Location = {
  code: "001",
  name: "Sede Norte",
  image: "https://via.placeholder.com/150",
  creationDate: "2024-01-01",
};

describe("LocationCard Component", () => {
  test("renders correctly", () => {
    render(<LocationCard {...mockLocation} />);

    expect(screen.getByText("Sede Norte")).toBeInTheDocument();
    expect(screen.getByText("Code: 001")).toBeInTheDocument();
    expect(screen.getByText("Created: 2024-01-01")).toBeInTheDocument();
  });
});
