import React from 'react';
import { useParams } from 'react-router';
import { useFetch } from 'use-http';
import classes from './BlogEntry.module.css';
import ReactMarkdown from 'react-markdown';
import { PrismCodeRenderer, LinkRenderer } from '../../markdown';
import { Typography } from '@material-ui/core';
import { useContentStyle } from '../../hooks/ContentStyleHook';

const BlogEntry = () => {
  const contentStyle = useContentStyle()
  const { id: blogId } = useParams()
  const { data: blogContent } = useFetch(`${process.env.REACT_APP_BLOG_API}/blog/${blogId}/content`, {}, [ blogId ]);
  const { data: meta } = useFetch(`${process.env.REACT_APP_BLOG_API}/blog/${blogId}`, {}, [ blogId ]);

  const markdownComponents = {
    code: PrismCodeRenderer,
    a: LinkRenderer,
    p: (props) => <Typography {...props} paragraph></Typography>,
    h1: (props) => <Typography component="h2" variant="h4" {...props} gutterBottom></Typography>,
    h2: (props) => <Typography component="h3" variant="h5" {...props} gutterBottom></Typography>,
    h3: (props) => <Typography component="h4" variant="h6" {...props} gutterBottom></Typography>
  }

  const header = () => (
    <section className={classes.header}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={meta.image}></img>
      </div>
      <div className={classes.headline}>
        <Typography component="h1" variant="h3" className={contentStyle.content}>{meta.title}</Typography>
      </div>
    </section>
  )

  return (
    <main className="blogEntry">
      { meta && header() }
      { blogContent &&
        <ReactMarkdown className={`${contentStyle.content} ${classes.content}`} components={markdownComponents} children={blogContent}>
        </ReactMarkdown>
      }
    </main>
  );
};

export default BlogEntry;