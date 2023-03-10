import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';

import { FullScreenLoading } from '../../components/ui';


const ElectronicaPage: NextPage  = () => {


  const { products, isLoading } = useProducts('/products?category=electronica');


  return (
    <ShopLayout title={'G&C - Electronica'} pageDescription={'Encuentra los mejores productos de Teslo para ellas'}>
        <Typography variant='h1' component='h1'>Electronica</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Productos electronica</Typography>

        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList products={ products } />
        }

        
    

    </ShopLayout>
  )
}

export default ElectronicaPage
