import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';

import { FullScreenLoading } from '../../components/ui';


const MobiliarioPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?category=mobiliario');


  return (
    <ShopLayout title={'G&C - Mobiliario'} pageDescription={'Encuentra los mejores productos de Teslo para ellos'}>
        <Typography variant='h1' component='h1'>Mobiliario</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Productos de mobiliario</Typography>

        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList products={ products } />
        }

        
    

    </ShopLayout>
  )
}

export default MobiliarioPage
