import {
    Button,
    Checkbox,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Paper,
    Typography,
} from '@material-ui/core';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    checkbox: {
        '&$checked': {
            color: '#F5B369',
        },
    },
    checked: {},
    grid: {
        paddingTop: '10vh',
    },
    list: {
        width: '30vw',
    },
}));

const StyledList: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.grid}>
            <Typography variant="h5" component="div" gutterBottom>
                <Typewriter
                    options={{
                        cursor: '',
                    }}
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80).typeString("Here's a slightly nicer list.").start();
                    }}
                />
            </Typography>

            <br />

<<<<<<< Updated upstream
            <Paper elevation={3}>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                classes={{
                                    root: classes.checkbox,
                                    checked: classes.checked,
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Frontend" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                classes={{
                                    root: classes.checkbox,
                                    checked: classes.checked,
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Backend" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                classes={{
                                    root: classes.checkbox,
                                    checked: classes.checked,
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Relational Database" />
                    </ListItem>
                </List>
            </Paper>

            <br />

            <Button variant="contained" color="secondary" component={Link} to="/">
                {'Back to Home'}
            </Button>
        </Grid>
=======
const StyledList: React.FC = () => {
    return (
        <div>
            <h1>{"Welcome to Huang Hongyi's Task Management App"}</h1>
            <ViewToggler />
            <div style={{ height: 400, width: '100%' }}>
                {' '}
                {
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                }
            </div>
        </div>
>>>>>>> Stashed changes
    );
};

export default StyledList;
