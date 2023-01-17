import React from 'react';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

type FilterProps = {
    onChangeSearchVal(e: React.ChangeEvent<HTMLInputElement>): void;
    value: string
    clearSearchVal(e: React.MouseEvent<HTMLButtonElement>): void
}

function Filter(props:FilterProps) {
    return (
        <div className='filter'>
            <p>Filter by keywords</p>
            <div>
               <ManageSearchIcon/>
                <input
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