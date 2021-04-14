import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetch } from 'use-http';
import classes from './BlogEntry.module.css';

const BlogEntry = props => {
  const [ blogContent, setBlogContent ] = useState({ __html: undefined });
  const { get, response } = useFetch(process.env.REACT_APP_BLOG_API)
  const { id: blogId } = useParams()

  const fetchBlogArticle = useCallback(async () => {
    const article = await get(`/blog/${blogId}/html`);
    if (response.ok) {
      setBlogContent({ __html: article });
    }
  }, [get, response, blogId])

  useEffect(() => {
    fetchBlogArticle()
  }, [fetchBlogArticle])

  return (
    <main className={classes.blogEntry}>
      <div dangerouslySetInnerHTML={blogContent}></div>
    </main>
  );
};

export default BlogEntry;