import shortUrlModel from "../model/model";
import  express from "express";

export const createUrl =async (req:express.Request,res:express.Response)=>{
    try{
      const {fullUrl} = req.body
      const newUrl = await shortUrlModel.create({fullUrl})
      res.status(200).send(newUrl)

    }
    catch(e)
    {
        res.status(500).send({message:"Something went wrong"})
    }
}

export const getAllUrl =async (req:express.Request,res:express.Response)=>{
    try{

        const urls = await shortUrlModel.find()
        if(urls.length < 0)
            res.status(400).send({message:"no urls found"})
        else
         res.status(200).send(urls)

    }
    catch(e)
    {
        res.status(500).send({message:"Something went wrong"})
    }
}
export const getUrl =async (req:express.Request,res:express.Response)=>{
   try{ 
    const id = req.params.id
    console.log(id)
    const url = await shortUrlModel.findById(id)
    res.status(200).send(url)}
   catch(e)
   {
    
    res.status(500).send({message:"Something went wrong"})
   }
    
}

export const updateUrl =async (req:express.Request,res:express.Response)=>{
    
}

export const deleteUrl =async (req:express.Request,res:express.Response)=>{
    try{ 
        const id = req.params.id
        console.log(id)
        await shortUrlModel.findByIdAndDelete({_id:id})
        res.status(200).send({message:"deleted"})}
       catch(e)
       {
        
        res.status(500).send({message:"Something went wrong"})
       }
}