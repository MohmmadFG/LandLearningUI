import { test } from "vitest";
import { measureRenders } from "reassure";
import LoginPage from "../page/LoginPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("measure ContinerLogin renders", async () => {
  const results = await measureRenders(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  console.log(results);
});
