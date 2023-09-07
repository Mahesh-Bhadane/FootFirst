import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Payment from "@/app/(main)/payment/page";

describe("Home component", () => {
  it("Should renders welcome message and button", () => {
    render(<Payment />);

    expect(screen.getByText("welcome to next.js")).toBeInTheDocument();
  });
});
