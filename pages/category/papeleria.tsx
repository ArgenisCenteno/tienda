import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';

import { FullScreenLoading } from '../../components/ui';


const PapeleriaPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?category=papeleria');


  return (
    <ShopLayout title={'G&C - Papeleria'} pageDescription={'Encuentra los mejores productos de Teslo para niños'}>
        <Typography variant='h1' component='h1'>Papeleria</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Productos de papeleria</Typography>

        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList products={ products } />
        }

        
    

    </ShopLayout>
  )
}

export default PapeleriaPage
