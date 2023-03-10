import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable';
import fs from 'fs';
import { IOrder } from '../../../interfaces';
import { v2 as cloudinary } from 'cloudinary';
import { isValidObjectId } from 'mongoose';
import { db } from '../../../database';
import { Order } from '../../../models';
cloudinary.config( process.env.CLOUDINARY_URL || '' );


type Data = 
| { message: string } 
|   IOrder[]


 

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch (req.method) {
         
            case 'PUT':
                return updateOrders(req, res);    
    
        default:
            res.status(400).json({ message: 'Bad request' });
    }

}


 

const updateOrders = async(req: NextApiRequest, res: NextApiResponse<Data>) =>  {
    
    const { orderId = '', NewPaid = '' } = req.body;
    
    if ( !isValidObjectId(orderId) ) {
        return res.status(400).json({ message: 'No existe una orden por ese id' })
    }

    

    await db.connect();
    const order = await Order.findById( orderId );

    if ( !order ) {
        await db.disconnect();
        return res.status(404).json({ message: 'Orden no encontrada: ' + orderId });
    }

   if (NewPaid === 'pagado'){
    order.status = 'Sin entregar';
    order.isPaid = false;
    await order.save();
    await db.disconnect();

    return res.status(200).json({ message: 'Orden actualizada' });
   }
     
   if (NewPaid === 'sinpago'){
    order.isPaid = true;
    order.status = 'Sin entregar';
        await order.save();
        await db.disconnect();
    
        return res.status(200).json({ message: 'Orden actualizada' });
   }     
    
   if (NewPaid === 'Enviado'){
    order.isPaid = true;
    order.status = 'Enviado';
        await order.save();
        await db.disconnect();
    
        return res.status(200).json({ message: 'Orden actualizada' });
   } 

   
     
}