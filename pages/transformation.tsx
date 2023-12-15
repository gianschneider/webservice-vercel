import React, {useState} from 'react';
import axios from 'axios';
import {Button, TextField, Typography, Paper} from '@mui/material';
 

const Transformation = () => {
    const [lv95E, setLV95E] = useState(0);
    const [lv95N, setLV95N] = useState(0);
    const [resultat, setResultat] = useState(0);

    const transformiere = async() => {
        try {
            const response = await axios.get(`/api/transformiere?E=${lv95E}&N=${lv95N}`);
            setResultat(response.data.KoordinatenWGS84);
        }
        catch {
            console.log("Fehler!! API Aufruf!!");
        }
    }

    return (
    <>
        <Paper elevation={5} style={{padding: '15px', margin: '15px', maxWidth: '400px'}}>
            <Typography variant="h5">Transformation</Typography>
            <TextField
                label="LV95 - Koordinaten - Ost"
                value={lv95E}
                onChange={ (e) => setLV95E(parseInt(e.target.value,10) || 0)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="LV95 - Koordinaten - Nord"
                value={lv95N}
                onChange={ (e) => setLV95N(parseInt(e.target.value,10) || 0)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={transformiere}>
                Transformiere in WGS84 Koordinaten
            </Button>

            {resultat !=0 && (
                <Typography variant="h6">
                    WGS84 - Koordinaten: {resultat}
                </Typography>

            )}

        </Paper>
        
    </>)
}

export default Transformation;