import { FunctionComponent } from "react";
import { ViewProps } from "./View.types";

export const View: FunctionComponent<ViewProps> = (props) => (
  <div>{props?.children}</div>
);
