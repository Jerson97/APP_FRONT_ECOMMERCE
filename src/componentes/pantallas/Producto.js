import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { getProductos } from '../../actions/ProductoAction';
import useStyles from '../../theme/useStyles';
import {useStateValue} from '../../contexto/store';

const Producto = (props) => {

    const [ {sesionCarritoCompra}, dispatch] = useStateValue();

    const [requestProductos, setRequestproductos] = useState({
        pageIndex: 1,
        pageSize: 2,
        search: ''
    });

    const [paginadorProductos, setPaginadorproductos] = useState({
        count : 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data : []
    });


    const handleChange = (event, value) => {
        setRequestproductos( (anterior) => ({
            ...anterior,
            pageIndex: value
        }))
    }

    useEffect(() => {
        const getListaProductos = async () => {
            const response = await getProductos(requestProductos);
            setPaginadorproductos(response.data);
        }
        getListaProductos();
    },[requestProductos]);

    //const miArray = ProductoArray;
    const verProducto = async (item) => {

        //await addItem(sesionCarritoCompra, item, dispatch);

        props.history.push("/detalleProducto/" + item.id);
    }

    const classes = useStyles();

    if(!paginadorProductos.data){
        return null;
    }

    return (
        <Container className={classes.Containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                { paginadorProductos.data.map(data => (
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
                                {data.nombre}
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth onClick={() => verProducto(data)}>
                                MAS DETALLES
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
            <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={handleChange}/>
        </Container>
    );
};

export default Producto;