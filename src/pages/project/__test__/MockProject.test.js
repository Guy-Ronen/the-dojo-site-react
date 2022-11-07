import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockProject from "./MockProject";
import {
  projectProps,
  errorProps,
  noProjectProps,
} from "../../../test/projectProps";

describe("Online Users", () => {
  it("should have render project", () => {
    render(<MockProject props={projectProps} />);
    screen.debug();
  });

  //   it("should have render error", () => {
  //     render(<MockProject props={errorProps} />);
  //     screen.debug();
  //   });

  //   it("should have render loading", () => {
  //     render(<MockProject props={noProjectProps} />);
  //     screen.debug();
  //   });
});
