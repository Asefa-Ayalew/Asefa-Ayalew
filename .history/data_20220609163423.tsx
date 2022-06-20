import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {BsCircleFill} from 'react-icons/bs'
import { IService, ISkill } from './type';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import {MdDeveloperMode} from 'react-icons/md'


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
        title: 'API Development',
        about:
        'I can develop robust REST API using <b>django REST API</b> and <b>node API</b>',
    },
    {
        Icon:MdDeveloperMode,
        title:'competitive coder',
        about:
        'a daily problem solver in <b> Hacker Rank </b> and <b>Leet code</b>',
    },
    {
        Icon:AiOutlineAntDesign,
        title:'UI/UX designer',
        about:
        'stunning user interface design using <b>Figma</b> and <b>Flamer</b>',
    },
    {
        Icon:RiComputerLine,
        title:"Mathematician",
        about:
        'Briliant and genius Mathematics inventor',
    },
]

export const languages:ISkill[]= [
    {
        name:'python',
        level: '100%',
        Icon:BsCircleFill,
    },
    {
        name: 'Javascript',
        level: '100%',
        Icon:BsCircleFill,
    },
    {
        name: 'React',
        level:'100%',
        Icon:BsCircleFill,
    },
    {
        name: 'Java',
        level: '98%',
        Icon:BsCircleFill,
    },
    {
        name: 'C#',
    }
]