import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';
import { ProductoArray } from '../data/dataPrueba';

const Producto = (props) => {


    const miArray = ProductoArray;
    const verProducto = (id) => {
        props.history.push("/detalleProducto/" + id);
    }

    const classes = useStyles();
    return (
        <Container className={classes.Containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                { miArray.map(data => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
                    <Card>
                        <CardMedia
                        className={classes.media}
                        image="https://newathletic.vteximg.com.br/arquivos/ids/159584-1000-1000/NK8006B.jpg?v=637559958910930000"
                        title="mi producto"
                        >
                            <Avatar variant="square" className={classes.price}>
                                ${data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.text_card}>
                                {data.titulo}
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth onClick={() => verProducto(data.key)}>
                                MAS DETALLES
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Producto;