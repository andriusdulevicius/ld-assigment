import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, Link, Grid, Box, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import fetchData from '../../utils/fetchData';

const LatestNews = () => {
  const classes = useStyles();
  const articlesApi = `https://gnews.io/api/v4/top-headlines?&token=${process.env.REACT_APP_GNEWS_TOKEN}&lang=en&max=8`;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData(articlesApi);
      setArticles(data.articles);
    })();
  }, [articlesApi]);

  return (
    <Grid container>
      {articles &&
        articles.map((article, index) => {
          const { title, image, url } = article;
          return (
            <Grid item key={index} className={classes.wrapper} md={6} xs={12}>
              <Card>
                <CardActionArea>
                  <Box className={classes.news}>
                    <CardMedia className={classes.image} component='img' image={image} alt={title} />
                    <CardContent>
                      <Typography variant='caption'>{title.split(' ').slice(0, 6).join(' ')} </Typography>
                      <Link href={url} target='_blank'>
                        Read more...
                      </Link>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default LatestNews;

const useStyles = makeStyles({
  wrapper: {
    marginBottom: '1rem',
    padding: '0.5rem',
    maxHeight: '100px',
  },
  news: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '100px',
    height: '90px',
  },
});
