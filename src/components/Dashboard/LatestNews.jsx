import { useState, useEffect } from 'react';
import { Card, Link, Grid, Box, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import fetchData from '../../utils/fetchData';

export default function LatestNews() {
  const articlesApi = `https://gnews.io/api/v4/top-headlines?&token=${process.env.REACT_APP_GNEWS_TOKEN}&lang=en&max=8`;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData(articlesApi);
      setArticles(data.articles);
    })();
  }, [articlesApi]);

  return (
    <Grid container columns={2} columnGap={1}>
      {articles &&
        articles.map((article, index) => {
          const { title, image, url } = article;
          return (
            <Grid item sx={{ marginBottom: '1rem', padding: '0.5rem', width: '48%', maxHeight: '100px' }} key={index}>
              <Card>
                <CardActionArea>
                  <Box display='flex' alignItems='center'>
                    <CardMedia sx={{ width: '100px' }} component='img' height='90px' image={image} alt={title} />
                    <CardContent>
                      <Typography variant='caption'>{title.split(' ').slice(0, 6).join(' ')} </Typography>
                      <Link to={url}>Read more...</Link>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
}
