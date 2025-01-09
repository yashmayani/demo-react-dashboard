import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IoMdClose } from "react-icons/io";
import { Padding } from '@mui/icons-material';

function Model() {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <button onClick={() => setOpen(true)} style={{ border: "none", borderRadius: "5px", padding: "10px", backgroundColor: "PowderBlue", cursor: "pointer" , width:"10%" , marginBlockStart:"10px" }}>Open</button>

            <Dialog onClose={handleClose} open={open} fullWidth
                maxWidth="sm">
                <Card >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                MC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings" onClick={handleClose}>
                                <IoMdClose />
                            </IconButton>
                        }
                        title="Merry Christmas"
                        subheader="December 25, 2024"
                    />
                    <div style={{ display: "flex", paddingInline: "10px" }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYX6ko6bbIRJ9yOe4JAGgHBuAyqQ5BmrKIvzOVn9ymjXPQVKSk4x_aE18pKemvJ6eHkyEUg&s"
                            alt="Paella dish"
                        />

                        <div variant="body2" sx={{ color: 'text.secondary' }} style={{ paddingInline: "15px" }}>
                            Celebrating the Magic of Christmas: A Time for Joy, Giving, and Reflection

                            Christmas is a time that carries a special kind of magic. It’s more than just a holiday—it’s a season of love, joy, and gratitude that brings families and communities together. From the twinkling lights on the tree to the aroma of freshly baked cookies, Christmas awakens the senses and fills hearts with warmth.

                            At the heart of Christmas is the spirit of giving.
                        </div>

                    </div>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>

                    </CardActions>

                </Card>
            </Dialog>

        </>
    );
}

export default Model;
