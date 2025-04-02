import React, { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useTranslation } from 'react-i18next';

function SearchBar(props){
    
    const [search, setSearch] = useState('');

    const { t } = useTranslation();

    return (
        <Grid container spacing={1} sx={{ mt: 2 }} style={{ width: '100%', margin: '0 auto', padding: '20px' }}>
            <Grid item xs={9} style={{ margin: '10px 0' }}>
                <TextField
                fullWidth
                label={t('searchLabel')}
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        props.onSubmit(search);
                    }}}
                />
            </Grid>
            <Grid item style={{ margin: '15px 0' }}>
                <Button variant="contained" size="large" sx={{ marginLeft: "auto" }} color="primary" startIcon={<SearchOutlinedIcon />} onClick={() => props.onSubmit(search)} >
                    {t('searchButton')}     
                </Button>
            </Grid>
        </Grid>
        
    );
};

export default SearchBar;
