import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces';


const productSchema = new Schema({
    description: {type: String, required: true},
    images:[{type: String}],
    inStock:{type: Number, required: true, default: 0},
    price:{type: Number, required: true, default: 0},
    slug: {type: String, required: true, unique: true},
    tags: [{type: String}],
    title: {type: String, required: true}, 
    category: {
        type: String,
        enum:{
            values:['papeleria', 'mobiliario', 'electronica'],
            message: '{VALUE no es una categoria valida'
        }
    }
}, {
    timestamps: true
}); 


productSchema.index({ title: 'text', tags: 'text' });


const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema );


export default Product;