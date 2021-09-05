import React from "react";
import { Trans as TransOriginal, useTranslation } from "react-i18next";

/**
 * This is a wrapper component for react-i18next Trans. We wrap it so we can
 * access the useTranslation hook, then we can import this component into
 * .astro components for use in translating blocks of text/elements. 
 */
const Trans = (props) => { 
  const { t } = useTranslation();

  return (
    <TransOriginal {...props} t={t}>{props.children}</TransOriginal>
  )
};

export default Trans;