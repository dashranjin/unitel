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
    { id: 3201, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'IDD - JAPAN : KDDI CORPORATION', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 35, CONNECT - 3', createdDate: '2023-01-15 21:00:04', task: 'ТГ - ҮСАХ' },
    { id: 3202, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'IDD - SOUTH SUDAN (REPUBLIC OF) : SUDANESE MOBILE', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 12, CONNECT - 0', createdDate: '2023-01-15 21:00:05', task: 'ТГ - ҮСАХ' },
    { id: 3203, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'OD - RUSSIAN FEDERATION : PJSC MOBILE TELESYSTEMS', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 15, CONNECT - 0', createdDate: '2023-01-15 21:00:06', task: 'ТГ - ҮСАХ' },
    { id: 3204, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'OD - INDIA : INDIA', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 35, CONNECT - 3', createdDate: '2023-01-15 21:00:04', task: 'ТГ - ҮСАХ' },
    { id: 3205, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'IDD - PHILIPPINES : PHILIPPINES', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 12, CONNECT - 0', createdDate: '2023-01-15 21:00:05', task: 'ТГ - ҮСАХ' },
    { id: 3206, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'IDD - CHINA : CHINA MOBILE LIMITED', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 15, CONNECT - 0', createdDate: '2023-01-15 21:00:06', task: 'ТГ - ҮСАХ' },
    { id: 3207, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'IDD - KOREA REPUBLIC OF : KOREA REPUBLIC OF', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 35, CONNECT - 3', createdDate: '2023-01-15 21:00:04', task: 'ТГ - ҮСАХ' },
    { id: 3208, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'IDD - TURKEY : TT MOBIL ILETISM HIZMETLERAI A.S', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 12, CONNECT - 0', createdDate: '2023-01-15 21:00:05', task: 'ТГ - ҮСАХ' },
    { id: 3209, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'IDD - EGYPT : EGYPT', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 15, CONNECT - 0', createdDate: '2023-01-15 21:00:06', task: 'ТГ - ҮСАХ' },
    { id: 3210, status: 'ШИНЭ ХҮСЭЛТ', microservice: 'INTL. VOICE MONITOR', subject: 'ASR', name: 'OD - RUSSIAN FEDERATION : LLC T2 MOBILE', step: '1/3', priority: 'CRITICAL', detail: 'DAILY, TOTAL - 15, CONNECT - 0', createdDate: '2023-01-15 21:00:06', task: 'ТГ - ҮСАХ' },
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
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            />
            {renderMenu}
        </div>
    );
}
export default Dashboard;