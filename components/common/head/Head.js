import React from 'react';
import Head from 'next/head';
import { baseUrl, metaDesc, metaKeywords, metaSiteTitle, fbPageID, fbID } from '../../../config/config';

const CustomHead = ({
  title = '',
  metaTitle = '',
  description = '',
  keywords = '',
  author = '',
  url = '',
  type = '',
  image = '',
  children
}) => {
  title = title ? title : metaSiteTitle;
  metaTitle = metaTitle ? metaTitle : metaSiteTitle;
  description = description ? description : metaDesc;
  keywords = keywords ? keywords : metaKeywords;
  author = author ? author : 'Website Author';
  url = url ? url : baseUrl;
  type = type || 'website';
  image = image || (baseUrl + '/images/logo.png');

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title}</title>
      <meta
        name="title"
        key="title"
        content={metaTitle}
      />
      <meta
        name="description"
        key="description"
        content={description}
      />
      <meta
        name="keywords"
        key="keywords"
        content={keywords}
      />
      <meta
        name="author"
        key="author"
        content={author}
      />
      <meta
        name="url"
        key="url"
        content={url}
      />
      <meta
        property="fb:app_id"
        key="fb:app_id"
        content={fbID}
      />
      <meta
        property="fb:pages"
        content={fbPageID}
        key="fb:pages"
      />
      <meta
        property="og:locale"
        content="en_US"
        key="og:locale"
      />
      <meta
        property="og:site_name"
        content={metaSiteTitle}
        key="og:site_name"
      />
      <meta
        property="og:url"
        key="og:url"
        content={url}
      />
      <meta
        property="og:type"
        key="og:type"
        content={type}
      />
      <meta
        property="og:title"
        key="og:title"
        content={metaTitle}
      />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta
        property="og:image"
        key="og:image"
        content={image}
      />
      <meta
        property="og:image:url"
        key="og:image:url"
        content={image}
      />
      <meta
        property="og:image:secure_url"
        key="og:image:secure_url"
        content={image}
      />
      <meta
        property="og:image:alt"
        key="og:image:alt"
        content={metaTitle}
      />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/" key="article:publisher"
      />
      <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      ></meta>
      <meta name="twitter:creator" content="@fbPageID" key="twitter:creator" />
      <meta name="twitter:site" content="@fbPageID" key="twitter:site" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content="6 minutes" />

      <link rel="canonical" href={url} />

      {children}
    </Head>
  )
}

export default CustomHead;
