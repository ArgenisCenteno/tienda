import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Order } from '../../../models';
import { IOrder } from '../../../interfaces';
import { isValidObjectId } from 'mongoose';

type Data = 
| { message: string } 
|   IOrder[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ) {

        case 'GET':
            return getOrders(req, res);
        case 'PUT':
                return updateOrders(req, res);

        default:
            return res.status(400).json({ message: 'Bad request'});

    }


}

const getOrders = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    await db.connect();
    const orders = await Order.find()
        .sort({ createdAt: 'desc' })
        .populate('user', 'name email')
        .lean();
    await db.disconnect();

    return res.status(200).json( orders )

}

const updateOrders = async(req: NextApiRequest, res: NextApiResponse<Data>) =>  {
    
    const { orderId = '', status = '' } = req.body;
    
    if ( !isValidObjectId(orderId) ) {
        return res.status(400).json({ message: 'No existe una orden por ese id' })
    }

    

    await db.connect();
    const order = await Order.findById( orderId );

    if ( !order ) {
        await db.disconnect();
        return res.status(404).json({ message: 'Orden no encontrada: ' + orderId });
    }

    if(order.isPaid === false){
        await db.disconnect();
        return res.status(404).json({ message: 'No se puede entregar un orden sin pagar: ' + orderId });
    }

    order.status = status;
    await order.save();
    await db.disconnect();

    return res.status(200).json({ message: 'Orden actualizada' });
     
}