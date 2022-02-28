import { FC, ReactNode } from 'react';
import { makeStyles } from '@mui/styles';
import BottomLink from '../Reusables/BottomLink';
import { Box } from '@mui/material';
interface ComponentProps {
  footerLink?: {
    text?: string;
    href?: string;
    color?: string;
    target?: string;
  };
  key?: number | string;
  children?: ReactNode;
}

export const withFooter = (Component: FC): FC<ComponentProps> => {
  const NewComponent = (props: ComponentProps): JSX.Element => {
    const { footerLink } = props;
    const classes = useStyles();

    return (
      <>
        <Component {...props} />
        {footerLink?.text && (
          <Box className={classes.bottomLink}>
            <BottomLink {...footerLink} />
          </Box>
        )}
      </>
    );
  };
  return NewComponent;
};

const useStyles = makeStyles({
  bottomLink: {
    padding: '1rem',
  },
});
