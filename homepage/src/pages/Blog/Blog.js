import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useContentStyle } from 'hooks/ContentStyleHook';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFetch } from 'use-http';
import classes from './Blog.module.css';

const Blog = () => {
  const contentStyle = useContentStyle();
  const { data = [], loading } = useFetch(`${process.env.REACT_APP_BLOG_API}/blog`, {}, []);
  const history = useHistory();

  /**
   * Navigate to a specified article
   * @param {string} articleId identifies the article
   */
  function navigateTo(articleId) {
    history.push(`/blog/${articleId}`)
  }

  /**
   * Create a specified amount of skeleton cards.
   * @param {number} nrOfCards Number of cards that should be created
   * @returns JsxElements representing the skeleton cards
   */
  function createSkeletonCards(nrOfCards) {
    return [...Array(nrOfCards)].map((_, index) => (
      <Card key={index}>
        <CardActionArea>
          <Skeleton variant="rect" height="100px"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Skeleton variant="text" width="75%" height="50px"/>
            </Typography>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="60%"/>
          </CardContent>
        </CardActionArea>
      </Card>
    ))
  }

  return (
    <main className={`${classes.blog} ${contentStyle.content}`}>
      { loading && createSkeletonCards(2) }
      { data.map(article => (
          <Card key={article.id}>
            <CardActionArea onClick={() => navigateTo(article.id)}>
              { article.image &&
                <CardMedia component="img" alt="cover of the blog entry" height="100" image={article.image}>
                </CardMedia>
              }
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{article.title}</Typography>
                { article.description &&
                  <Typography variant="body1" component="p" color="textSecondary">{article.description}</Typography>
                }
                  </CardContent>
            </CardActionArea>
          </Card>
      ))}
    </main>
  );
};

export default Blog;