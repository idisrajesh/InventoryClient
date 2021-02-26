import React, { useEffect, useState, useRef } from 'react'
import Link from '@material-ui/core/Link'
import { get, addNewData } from '../../services/httpService'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { useForm, Form } from '../Shared/useForm';
import { WarehouseUrl } from '../../utils/constants/urlConstan';
import { useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}))

const initialValues = {
    WarehouseCode: '',
    WarehouseName: '',
    Location: '',
}

function AddWarehouse() {
    const { id } = useParams();
    const classes = useStyles();;
    const [isEdit, setIsEdit] = useState(false)
    const [addEditButtontext, setAddEditButtontext] = useState('Add');

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('WarehouseCode' in fieldValues)
            temp.WarehouseCode = fieldValues.WarehouseCode != "" ? "" : "This field is required."
        if ('WarehouseName' in fieldValues)
            temp.WarehouseName = fieldValues.WarehouseName ? "" : "This field is required."
        if ('Location' in fieldValues)
            temp.Location = fieldValues.Location ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);

    const onWarehouseSave = () => {

    }

    return (
        <div>
            <div className={`outer-div ${classes.root}`}>
                <div className="product-header">
                    <div className="title-container-rhs">
                        <Link href="/Warehouse" color="secondary"> Back</Link>
                    </div>
                </div>
                <div className='productdata-outer-div'>
                    <Form >
                        <TextField required id="txtBarcode" label="Barcode" name='Barcode'
                            value={values.WarehouseCode} onChange={handleInputChange}
                            error={!!errors.WarehouseCode} helperText={errors.WarehouseCode} />
                        <TextField required id="WarehouseName" label="Brand" name='Brand'
                            error={!!errors.WarehouseName}
                            helperText={errors.WarehouseName}
                            value={values.WarehouseName} onChange={handleInputChange} />
                        <TextField required id="txtCategory" label="Category" name='Category'
                            error={!!errors.Location} value={values.Location}
                            helperText={errors.Location} onChange={handleInputChange} />
                    </Form>
                </div>
                <div className={`productAdd-buttons ${classes.root}`}>
                    <Button variant="contained" color='secondary' onClick={onWarehouseSave} >{addEditButtontext}</Button>
                    {!isEdit ? <Button variant="contained" color='primary'> Reset</Button> : ''}
                    <Button variant="contained" color='default' onClick={() => window.location.href = '/WareHouse'}> Cancle</Button>
                </div>
            </div>
        </div >
    )
}

export default AddWarehouse
