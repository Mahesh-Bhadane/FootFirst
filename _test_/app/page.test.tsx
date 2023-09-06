import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Home component", () => {
  it("Should renders welcome message and button", () => {
    render(<Home />);
    
    expect(screen.getByText("welcome to next.js")).toBeInTheDocument();
  });
});


