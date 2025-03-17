import { Product } from "../model/product.model.js"

export const getProductById = (request,response,next)=>{
    Product.findById(request.params.id)
    .then(result=>{
        return response.status(200).json({product: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error.."});
    });
}
export const getProducts = (request,response,next)=>{
    Product.find()
    .then(result=>{
        return response.status(200).json({products: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const saveInBulk = (request,response,next)=>{
   Product.insertMany(request.body.products)
   .then(result=>{
     return response.status(201).json({message: "All product saved.."});
   }).catch(err=>{
    return response.status(500).json({error: 'Internal Server Error'});
   }); 
}