import React from "react";
import Context from "../context";

const providers = [
  Context.HomeProvider,
];

const ProviderInjection = ({ children }: { children: any }) => {
  providers.forEach((Provider) => (children = <Provider>{children}</Provider>));
  return children;
};

export default ProviderInjection;