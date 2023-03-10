
import { ConfirmationNumberOutlined } from '@mui/icons-material'
import { Chip, Grid, Select, MenuItem } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import useSWR from 'swr';
import { IOrder, IUser } from '../../interfaces';
import { AdminLayout } from '../../components/layouts'

import { useState, useEffect } from 'react';
import tesloApi from '../../api/tesloApi';






const OrdersPage = () => {

    const { data, error } = useSWR<IOrder[]>('/api/admin/orders');
    const [ orders, setOrder ] = useState<IOrder[]>([]);
    const [ paids, setPaid ] = useState<IOrder[]>([]);

    useEffect(() => {
        if (data) {
            setOrder(data);
        }
      }, [data])
      

    if ( !data && !error ) return (<></>);
    
    const rows = data!.map( order => ({
        id    : order._id,
        email  : (order.user as IUser).email,
        name  : (order.user as IUser).name,
        total : order.total,
        isPaid: order.isPaid,
        pay: order.isPaid,
        noProducts: order.numberOfItems,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        status: order.status,
        delivery: order.status,
    }));

    
    const onOrderUpdated = async( orderId: string, newStatus: string ) => {

        const previosOrders = orders.map( order => ({ ...order }));
        const updatedOrder = orders.map( order => ({
            ...order,
            status: orderId === order._id ? newStatus : order.status
        })); 
    
        setOrder(updatedOrder);
    
        try {
            
            await tesloApi.put('/admin/orders', {  orderId, status: newStatus });
    
        } catch (error) {
            setOrder( previosOrders );
            console.log(error);
            alert('No se puede actualizar la entrega de esta orden');
        }
    
    }

    const onPaidAdmin = async( orderId: string, NewPaid: string) => {

        const previosPaids = paids.map( order => ({ ...order }));
      
        try {
            
            await tesloApi.put('/admin/payAdmin', {orderId});
    
        } catch (error) {
            setOrder( previosPaids );
            console.log(error);
            alert('No se puede actualizar el pago de esta orden');
        }
    
    }
    
    
    
    const columns:GridColDef[] = [
        { field: 'id', headerName: 'Orden ID', width: 250 },
        { field: 'email', headerName: 'Correo', width: 250 },
        { field: 'name', headerName: 'Nombre Completo', width: 300 },
        { field: 'total', headerName: 'Monto total', width: 300 },
        {
            field: 'isPaid',
            headerName: 'Pagada',
            renderCell: ({ row }: GridValueGetterParams) => {
                return row.isPaid
                    ? ( <Chip variant='outlined' label="Pagada" color="success" /> )
                    : ( <Chip variant='outlined' label="Pendiente" color="error" /> )
            }
        },
        { field: 'isPaid', headerName: 'Estado de pago', width: 300 },
        { field: 'createdAt', headerName: 'Creada en', width: 300 },
        { field: 'noProducts', headerName: 'No.Productos', align: 'center', width: 150 },
        {
            field: 'pay', 
            headerName: 'Marcar como pagada',  
            width: 200,
            renderCell: ({row}: GridValueGetterParams) => {
                return (
                    <Select
                    value={ row.isPaid }
                    label="Estado de entrega"
                    sx={{ width: '300px' }}
                    onChange={ ({ target }) => onPaidAdmin(row.id, target.value ) }
                >
                    
                    <MenuItem value='pagado'> Pagada</MenuItem>
                    <MenuItem value='sinpago'> Sin Pagar </MenuItem>
                    
                    
                </Select>
                )
            }
        },
        
        {
            field: 'check',
            headerName: 'Ver orden',
            renderCell: ({ row }: GridValueGetterParams) => {
                return (
                    <a href={ `/admin/orders/${ row.id }` } target="_blank" rel="noreferrer" >
                        Ver orden
                    </a>
                )
            }
        },
       
       
        {
            field: 'delivery', 
            headerName: 'Actualizar entrega',  
            width: 200,
            renderCell: ({row}: GridValueGetterParams) => {
                return (
                    <Select
                    value={ row.status }
                    label="Estado de entrega"
                    sx={{ width: '300px' }}
                    onChange={ ({ target }) => onOrderUpdated( row.id, target.value ) }
                >
                    <MenuItem value='Entregado'> Entregado </MenuItem>
                    <MenuItem value='Enviado'> Enviado </MenuItem>
                    <MenuItem value='Sin entregar'> Sin entregar </MenuItem>
                    
                </Select>
                )
            }
        },
        { field: 'updatedAt', headerName: 'Entregada en', width: 300 },
        
    ];
   

  return (
    <AdminLayout 
        title={'Ordenes'} 
        subTitle={'Mantenimiento de ordenes'}
        icon={ <ConfirmationNumberOutlined /> }
    >
         <Grid container className='fadeIn'>
            <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                <DataGrid 
                    rows={ rows }
                    columns={ columns }
                    pageSize={ 10 }
                    rowsPerPageOptions={ [10] }
                />

            </Grid>
        </Grid>
        
    </AdminLayout>
  )
}

export default OrdersPage