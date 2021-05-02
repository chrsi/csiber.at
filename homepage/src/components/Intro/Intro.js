import React from 'react';
import { Typography } from '@material-ui/core';
import { useAboutTypography } from 'pages/About/About';
import { useContentStyle } from 'hooks/ContentStyleHook';

const Intro = () => {
  const aboutTypography = useAboutTypography();
  const contentStyle = useContentStyle();

  return (
    <section className={contentStyle.content}>
      <h2 className={aboutTypography.headline}>👋 Hi there,</h2>
      <Typography variant="body1" paragraph={true}>
        my name is Christian and I'm a software developer from Mondsee (Austria) currently living in Vienna.
      </Typography>
      <Typography variant="body1" paragraph={true}>
        I love to build digital products that support our everyday life. While I try to keep the device interaction at a minimum I focus on making the remaining user interface as intuitive as possible.
      </Typography>
    </section>
  );
};

export default Intro;
