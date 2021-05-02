import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useFetch } from 'use-http';
import classes from './BlogEntry.module.css';
import ReactMarkdown from 'react-markdown';
import { PrismCodeRenderer, LinkRenderer } from '../../markdown';
import { Button, Typography } from '@material-ui/core';
import { useContentStyle } from '../../hooks/ContentStyleHook';
import Skeleton from '@material-ui/lab/Skeleton';
import { ArrowBackIos } from '@material-ui/icons';

const BlogEntry = () => {
  const contentStyle = useContentStyle()
  const { id: blogId } = useParams()
  const { data: blogContent, loading: loadingContent } = useFetch(`${process.env.REACT_APP_BLOG_API}/blog/${blogId}/content`, {}, [ blogId ]);
  const { data: meta, loading: loadingMeta } = useFetch(`${process.env.REACT_APP_BLOG_API}/blog/${blogId}`, {}, [ blogId ]);
  const history = useHistory();

  function navigateBack() {
    history.goBack();
  }

  const markdownComponents = {
    code: PrismCodeRenderer,
    a: LinkRenderer,
    p: (props) => <Typography {...props} paragraph></Typography>,
    h1: (props) => <Typography component="h2" variant="h4" {...props} gutterBottom></Typography>,
    h2: (props) => <Typography component="h3" variant="h5" {...props} gutterBottom></Typography>,
    h3: (props) => <Typography component="h4" variant="h6" {...props} gutterBottom></Typography>
  }

  const header = (
    <section className={classes.header}>
      <div className={classes.imageContainer}>
        { meta?.image && <img className={classes.image} src={meta.image} alt="cover of the blog entry"></img> }
      </div>
      <div className={`${contentStyle.content} ${classes.headerContent}`}>
        <Button onClick={navigateBack} className={classes.backButton} startIcon={<ArrowBackIos />}>
          Back to the overview
        </Button>
        <div className={classes.headline}>
          <Typography component="h1" variant="h3">
            { loadingMeta ?
              <Skeleton width="100%" height="70px"></Skeleton> :
              meta.title
            }
          </Typography>
        </div>
      </div>
    </section>
  )

  const SkeletonText = (
    <>
      <Typography paragraph>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton width="60%"></Skeleton>
      </Typography>
      <Typography paragraph>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton width="30%"></Skeleton>
      </Typography>
      <Typography paragraph>
      <Skeleton></Skeleton>
      <Skeleton width="80%"></Skeleton>
      </Typography>
    </>
  )

  return (
    <main className="blogEntry">
      { header }
      <section className={`${contentStyle.content} ${classes.content}`}>
        { loadingContent ?
          SkeletonText :
          <ReactMarkdown  components={markdownComponents} children={blogContent}>
          </ReactMarkdown>
        }
      </section>
    </main>
  );
};

export default BlogEntry;