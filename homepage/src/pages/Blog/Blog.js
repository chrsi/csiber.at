import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { useContentStyle } from 'hooks/ContentStyleHook';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFetch } from 'use-http';
import classes from './Blog.module.css';

const Blog = () => {
  const contentStyle = useContentStyle();
  const [articles, setArticles] = useState([])
  const { get, response } = useFetch(process.env.REACT_APP_BLOG_API)
  const history = useHistory();

  const fetchBlogArticles = useCallback(async () => {
    const articles = await get('/blog');
    if (response.ok) {
      setArticles(articles);
    }
  }, [get, response])

  useEffect(() => {
    fetchBlogArticles()
  }, [fetchBlogArticles])

  function navigateTo(articleId) {
    history.push(`/blog/${articleId}`)
  }

  return (
    <main className={`${classes.blog} ${contentStyle.content}`}>
      {articles.map(article => (
          <Card key={article.id}>
            <CardActionArea onClick={() => navigateTo(article.id)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{article.title}</Typography>
                <Typography variant="body1" component="p" color="textSecondary">{article.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      ))}
    </main>
  );
};

export default Blog;