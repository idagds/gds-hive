import React from 'react';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import favicon from 'pages/favicon.png';

const Html = (props) => {
  let title;
  title = DocumentTitle.rewind();
  if (props.title) {
    title = props.title;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0" />
        <title>Singapore Government Digital Services</title>
        <title>{props.title}</title>
        <link href={favicon} rel="icon" type="image/x-icon" />
        <link rel="stylesheet" href="//cdn.rawgit.com/konpa/devicon/master/devicon.min.css" />
        <link rel="stylesheet" type="text/css" href={link('/gds.css')} />
        <link href="//fonts.googleapis.com/css?family=Catamaran:500" rel="stylesheet" type="text/css" />
      </head>

      <body className="landing-page">
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
        <script src={link('/bundle.js')} />
      </body>
    </html>
  );
};

Html.propTypes = {
  body: React.PropTypes.string,
  favicon: React.PropTypes.string,
  title: React.PropTypes.string
};

export default Html;
