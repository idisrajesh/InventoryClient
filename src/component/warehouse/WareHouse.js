import React, { useState, useEffect } from 'react'
import { get } from '../../services/httpService'
import {
    DataGrid
} from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import { WarehouseUrl } from '../../utils/constants/urlConstan'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));

function WareHouse() {
    const [wareHouse, setWareHouse] = useState([]);
    const classes = useStyles();
    const columns = [
        {
            field: "xyz",
            headerName: "Edit",
            sortable: false,
            width: 100,
            cellClassName: 'mouse-pointer-cursor',
            renderCell: (params) => (

                < a href={`/Edit/Product/${params.row.id}`}  > <EditIcon >EditIcon</EditIcon></a>

            )
        },
        { field: 'WarehouseCode', headerName: 'Warehouse Code', width: 200 },
        { field: 'WarehouseName', headerName: 'Warehouse Name', width: 180 },
        { field: 'Location', headerName: 'Location', width: 180 },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 130,
            cellClassName: 'mouse-pointer-cursor',
            renderCell: (params) => (
                <DeleteSweepOutlinedIcon  ></DeleteSweepOutlinedIcon>
            )
        },

    ];

    useEffect(() => {
        get(WarehouseUrl.GetAllWarehouse).then(data => {
            if (data && data.success) {
                console.log(data.data);
                setWareHouse(data.data);
            }
        });

    }, [])

    return (
        <div className={`outer-div ${classes.root}`}>
            <div className="product-header">
                <div className="title-container-rhs">
                    <Button variant="contained" onClick={() => window.location.href = '/Add/WareHouse'} color="secondary">
                        Add WareHouse
                    </Button>
                </div>

            </div>
            <div className='productdata-outer-div'>
                <DataGrid rows={wareHouse} columns={columns} pageSize={20} columnBuffer={2} />
            </div>
        </div>
    )
}

export default WareHouse
