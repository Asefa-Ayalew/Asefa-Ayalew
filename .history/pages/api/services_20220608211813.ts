import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";

export default (req:NextApiRequest, res:NextApiResponse)=>{

    //by default get request
    console.log(sd);
    
    res.status(200).json({services})
}