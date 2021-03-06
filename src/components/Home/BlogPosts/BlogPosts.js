import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from "./ImgMediaCard";
import rp from 'request-promise';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        flexGrow:1
    },
    container: {
        padding: theme.spacing(1),
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
    headingText: {
        color: theme.palette.titleBanner.color,
        fontWeight: "700",
        fontSize: '48px',
        [theme.breakpoints.down('sm')]:{
            fontSize: '40px',
        },
    }
});

const BlogPosts = props => {
    const [posts, setPosts] = React.useState([]);
    const {classes} = props;

    React.useEffect( () => {
        const opts = {
            uri: process.env.REACT_APP_BLOG_API_URL,
            method: "GET",
            qs: {
                key: process.env.REACT_APP_BLOG_API_KEY,
                limit: 6,
            },
            json: true
        };

        rp(opts).then(data => {
            //console.log(data);
            setPosts(data.posts);
        }).catch(error => {
            console.log(error);
        })
    },[]);

    return (
        <div className={classes.root}>
            <Grid container spacing={0} justifyContent="center" className={classes.container}>
                <Grid item xs={12} align="center">
                    <Typography className={classes.headingText} paragraph>
                        Últimas noticias
                    </Typography>
                </Grid>
                {
                    posts.length === 0?
                        <Typography>Blog no disponible :(</Typography>:
                        posts.map((p,i) => (
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={i} align="center">
                                <ImgMediaCard post={p}/>
                            </Grid>
                        ))
                }
            </Grid>
        </div>
    );
}


export default withStyles(styles)(BlogPosts);