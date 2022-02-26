import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, Link, Grid, Box, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import fetchData from '../../utils/fetchData';
import endpoints from '../../utils/apiEndpoints';
import { withHeader } from '../Hoc/withHeader';

interface DataTypes {
  title: string;
  image: string;
  url: string;
}

const LatestNews: React.FC = () => {
  const classes = useStyles();
  const { getNews } = endpoints;

  const [articles, setArticles] = useState<DataTypes[] | []>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData(getNews);
      setArticles(data.articles || []);
    })();
  }, []);

  return (
    <Grid container>
      {articles &&
        articles.map((article, index) => {
          const { title, image, url } = article;
          return (
            <Grid item key={index} className={classes.wrapper} md={6} xs={12}>
              <Card sx={{ boxShadow: 'none' }}>
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

export default withHeader(LatestNews);

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
