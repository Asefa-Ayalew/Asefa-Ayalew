import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import { IService } from './type';
import { AiOutlineApi } from 'react-icons/ai';


export const services:IService[] = [
    {
        Icon:RiComputerLine,
        title: 'Frontend Development',
        about: 
        'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>css</b> and <b>Javascript</b>',
    },
    {
        Icon:FaServer,
        title: 'Backend Development',
        about:
        'handle database, server, api using <b>express</b> and other popular frameworks',
    },
    {
        Icon:AiOutlineApi,
        title: 'API '
    }
]