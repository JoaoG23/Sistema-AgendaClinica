import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { describe, test, vi } from "vitest";
import { Formulario } from "./";

import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

describe("<Formulario />", () => {
  test("should to render in the screen", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Formulario />
        </Router>
      </QueryClientProvider>
    );
  });
});
