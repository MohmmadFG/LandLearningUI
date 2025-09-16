import { expect, test } from "vitest";
import { measureRenders } from "reassure";
import { screen, render } from "@testing-library/react";
import ContinerLogin from "../../features/login/components/ContinerLogin";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("measure ContinerLogin renders", async () => {
  const results = await measureRenders(
    <MemoryRouter>
      <ContinerLogin />
    </MemoryRouter>
  );
  console.log(results);
});

test("fields It exists", () => {
  render(
    <MemoryRouter>
      <ContinerLogin />
    </MemoryRouter>
  );

  const emailField = screen.getByTestId("InpuEmail");
  expect(emailField).toBeInTheDocument();

  const passwordField = screen.getByTestId("Inpupassword");
  expect(passwordField).toBeInTheDocument();
  const BtnSub = screen.getByTestId("btnsadsa");
  expect(BtnSub).toBeInTheDocument();
});
