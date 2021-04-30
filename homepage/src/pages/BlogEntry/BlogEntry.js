import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetch } from 'use-http';
import classes from './BlogEntry.module.css';
import ReactMarkdown from 'react-markdown';
import { PrismCodeRenderer, LinkRenderer } from '../../markdown'

const BlogEntry = () => {
  const { id: blogId } = useParams()
  const { data: blogContent } = useFetch(`${process.env.REACT_APP_BLOG_API}/blog/${blogId}/content`, {}, [ blogId ]);
  const { data: meta } = useFetch(`${process.env.REACT_APP_BLOG_API}/blog/${blogId}`, {}, [ blogId ]);

  return (
    <main className={classes.blogEntry}>
      { meta && <h1>{meta.title}</h1> }
      { blogContent &&
        <ReactMarkdown components={{ code: PrismCodeRenderer, a: LinkRenderer }} children={blogContent}>
        </ReactMarkdown>
      }
    </main>
  );
};

export default BlogEntry;