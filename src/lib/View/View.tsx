import { FunctionComponent } from "react";
import { ViewProps } from "./View.types";

export const View: FunctionComponent<ViewProps> = (props) => (
  <div style={{ display: "block", width: "100%" }} id={props?.id}>
    {props?.children}
  </div>
);
