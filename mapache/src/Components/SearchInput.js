import React from 'react'
import styled from 'styled-components'

import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const StyledInput = styled(OutlinedInput)`
    background: white;
    border-radius: 10px 10px 0px 0px;
    height: 50px;
    width: 100%;
    margin-left: 50px;
`;

const SearchInput = () => (
    <StyledInput
        endAdornment={<InputAdornment position="end">
            <SearchIcon/>
        </InputAdornment>}
    />
)


export default SearchInput
