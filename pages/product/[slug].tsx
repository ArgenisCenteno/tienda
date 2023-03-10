import { useState, useContext } from 'react';
import { NextPage, GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
 import { Box, Button, Chip, Grid, Typography, Link } from '@mui/material';
 import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { CartContext } from '../../context/cart/CartContext';

import { ShopLayout } from '../../components/layouts';
import { ProductSlideshow} from '../../components/products';
import { ItemCounter } from '../../components/ui/ItemCounter';

import { dbProducts } from '../../database';
import { IProduct, ICartProduct} from '../../interfaces';



interface Props {
  product: IProduct
}


const ProductPage:NextPage<Props> = ({ product }) => {

  const router = useRouter();
  const { addProductToCart } = useContext( CartContext )

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    slug: product.slug,
    title: product.title,
    category: product.category,
    quantity: 1,
  })


  const onUpdateQuantity = ( quantity: number ) => {
    setTempCartProduct( currentProduct => ({
      ...currentProduct,
      quantity
    }));
  }


  const onAddProduct = () => {

    if ( !tempCartProduct.category ) { return; }

    addProductToCart(tempCartProduct);
    router.push('/cart');
  }


  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
    
      <Grid container spacing={3}>

        <Grid item xs={12} sm={ 7 }>
          <ProductSlideshow 
            images={ product.images }
          />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Box display='flex' flexDirection='column'>

            {/* titulos */}
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
            <Typography variant='subtitle1' component='h2'>{ `$${product.price}` }</Typography>
            <Typography variant='subtitle1' component='h2'>{ `Bs${product.price * 24.4} ` }</Typography>

            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              <ItemCounter 
                currentValue={ tempCartProduct.quantity }
                updatedQuantity={ onUpdateQuantity  }
                maxValue={ product.inStock > 10 ? 10: product.inStock }
              />

            </Box>


            {/* Agregar al carrito */}
            {
              (product.inStock > 0)
               ? (
                  <Button 
                    color="secondary" 
                    className='circular-btn'
                    onClick={ onAddProduct }
                    
                    
                  >
                    Agregar
                  </Button>
               )
               : (
                 <Chip label="No hay disponibles" color="error" variant='outlined' />
               )
            }


            {/* Descripción */}
            <Box sx={{ mt:3 }}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>
            <Link sx={{ mt:3 }} href='https://wa.me/584248079260' target='_blank'>
            <Button variant="contained" fullWidth color='success'> <WhatsAppIcon/> Atencion al cliente</Button>
            </Link> 
          </Box>
        </Grid>


      </Grid>
            
    </ShopLayout>
  )
}


// getServerSideProps 
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
//* No usar esto.... SSR
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  
//   const { slug = '' } = params as { slug: string };
//   const product = await dbProducts.getProductBySlug( slug );

  // if ( !product ) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false
  //     }
  //   }
  // }

//   return {
//     props: {
//       product
//     }
//   }
// }


// getStaticPaths....
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const productSlugs = await dbProducts.getAllProductSlugs();

  
  return {
    paths: productSlugs.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { slug = '' } = params as { slug: string };
  const product = await dbProducts.getProductBySlug( slug );

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}



export default ProductPage