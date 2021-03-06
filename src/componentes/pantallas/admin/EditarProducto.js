import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../../theme/useStyles';
import ImageUploader from 'react-images-upload';


const EditarProducto = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container justify="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>
                        EDITAR PRODUCTO
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <TextField 
                        label="Nombre Producto"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value="casaca DC veraniego"
                        />
                        <TextField 
                        label="Precio"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={9.99}
                        />
                        <TextField 
                        label="Marca"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value="DC"
                        />
                        <TextField 
                        label="Stock"
                        variant="outlined"
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={15}
                        />
                        <TextField 
                        label="Descripcion"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }}
                        value="Abrigo DC talla M, de algodon puro, de color Negro con botones 
                        y cierre, ideal para el invierno, con bolsillos al exterior e interior
                        suave al tacto con la piel"
                        />
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <ImageUploader 
                                withIcon={true}
                                buttonText="Buscar Imagen"
                                imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
                                maxFileSize={5242880}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar 
                                variant="square"
                                className={classes.avatarProducto}
                                src="https://newathletic.vteximg.com.br/arquivos/ids/159584-1000-1000/NK8006B.jpg?v=637559958910930000"/>
                            </Grid>
                        </Grid>
                        <Button 
                        variant="contained" 
                        color="primary">
                            ACTUALIZAR
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditarProducto;