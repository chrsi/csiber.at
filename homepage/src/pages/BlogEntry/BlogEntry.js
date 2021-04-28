import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetch } from 'use-http';
import classes from './BlogEntry.module.css';
import ReactMarkdown from 'react-markdown';
import { PrismCodeRenderer, LinkRenderer } from '../../markdown'

const BlogEntry = () => {
  const [ blogContent, setBlogContent ] = useState('');
  const { get, response } = useFetch(process.env.REACT_APP_BLOG_API)
  const { id: blogId } = useParams()

  const fetchBlogArticle = useCallback(async () => {
    const article = await get(`/blog/${blogId}`);
    if (response.ok) {
      setBlogContent(article);
    }
  }, [get, response, blogId])

  useEffect(() => {
    fetchBlogArticle()
  }, [fetchBlogArticle])

  return (
    <main className={classes.blogEntry}>
      <ReactMarkdown components={{ code: PrismCodeRenderer, a: LinkRenderer }} children={blogContent}>
      </ReactMarkdown>
    </main>
  );
};

export default BlogEntry;