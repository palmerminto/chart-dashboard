import { FunctionComponent } from "react";
import { FlexProps } from "./Flex.types";

export const Flex: FunctionComponent<FlexProps> = (props) => (
  <div>{props?.children}</div>
);
