declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGAElement> & { title?: string }
  >;

  const src: any;
  export default src;
}
