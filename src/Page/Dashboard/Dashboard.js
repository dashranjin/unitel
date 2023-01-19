import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Dashboard.css'
import dropdown from '../../Image/downarrow.png'
import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'status', headerName: 'STATUS', width: 130 },
    { field: 'microservice', headerName: 'MICROSERVICE', width: 130 },
    { field: 'subject', headerName: 'Sub', width: 130 },
    { field: 'name', headerName: 'NAME', width: 130 },
    { field: 'step', headerName: 'STEP', width: 130 },
    { field: 'priority', headerName: 'PRIORITY', width: 130 },
    { field: 'detail', headerName: 'Detail', width: 130 },
    { field: 'createdDate', headerName: 'CREATED DATE', width: 130 },
    { field: 'task', headerName: 'TASK', width: 130 }
];

const rows = [
    { id: 1, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'IDD - JAPAN : KDDI CORPORATION', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 35, CONNECT - 3', createdDate: '2023-01-15 21:00:04', task: 'ТГ - ҮСАХ' },
    { id: 2, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'IDD - JAPAN : KDDI CORPORATION', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 35, CONNECT - 3', createdDate: '2023-01-15 21:00:04', task: 'ТГ - ҮСАХ' },
    { id: 3, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'IDD - JAPAN : KDDI CORPORATION', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 35, CONNECT - 3', createdDate: '2023-01-15 21:00:04', task: 'ТГ - ҮСАХ' },
];

const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem >Хуучин хүсэлт</MenuItem>
            <MenuItem >Биелсэн хүсэлт</MenuItem>
            <MenuItem >Шинэ хүсэлт</MenuItem>
        </Menu>
    );

    return (
        <div className='data-container'>
            <div className='tableHeader'>
                <Button
                    id="demo-customized-button"
                    variant="none"
                    onClick={handleMenu}
                    endIcon={<img src={dropdown} alt={'menu'} style={{ width: '15px' }} />}
                    style={{ textTransform: 'none' }}

                >
                    Шинэ хүсэлт
                </Button>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            {renderMenu}
        </div>
    );
}
export default Dashboard;