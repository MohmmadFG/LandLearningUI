import { test } from "vitest";
import { measureRenders } from "reassure";
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
