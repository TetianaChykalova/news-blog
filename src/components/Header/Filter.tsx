import React from 'react';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import Input from '@mui/material/Input';

type FilterProps = {
    onChangeSearchVal(e: React.ChangeEvent<HTMLInputElement>): void;
    value: string
    clearSearchVal(e: React.MouseEvent<HTMLButtonElement>): void
}

function Filter(props:FilterProps) {
    return (
        <div className='filter'>
            <div>
                <p>News search by keywords</p>
                <ArrowCircleDownOutlinedIcon/>
            </div>
            <div>
                <Input
                    type="text"
                    placeholder='Enter your search'
                    value={props.value}
                    onChange={props.onChangeSearchVal}
                />
                {props.value && <button onClick={props.clearSearchVal}><BackspaceOutlinedIcon/></button>}
            </div>
        </div>
    );
}

export default Filter;