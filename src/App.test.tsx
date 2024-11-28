import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";

// Mock de Axios
jest.mock("axios");

beforeEach(() => {
  // Define el comportamiento del mock de Axios para cada prueba
  (axios.get as jest.Mock).mockResolvedValue({
    data: [
      {
        code: "001",
        name: "Sede Norte",
        image: "https://via.placeholder.com/150",
        creationDate: "2024-01-01",
      },
      {
        code: "002",
        name: "Sede Sur",
        image: "https://via.placeholder.com/150",
        creationDate: "2024-01-02",
      },
    ],
  });
});

test("renders location list", async () => {
  render(<App />);
  expect(await screen.findByText(/Sede Norte/i)).toBeInTheDocument();
});
