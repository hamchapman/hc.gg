import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({ title, description = "Ham Chapman's website" }) => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
    <title>{title || 'hc.gg'}</title>
    <meta name="author" content="Ham Chapman" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      {`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
        width: 100%;
        color: #2B303B;
        font-size: 16px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      html {
        height: 100%;
      }
      body {
        height: 100%;
        background-color: #FFFFFF;
      }
    `}
    </style>
    <style>{'body { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; '}</style>
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Head;
