/* eslint-disable react/display-name */
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Pre from "./Pre";

export const MDXComponents = {
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`/components/Layout/${layout}`).default;
    return <Layout {...rest} />;
  },
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
