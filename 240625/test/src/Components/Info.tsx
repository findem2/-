import { FC } from "react" 
import { Route, Routes, useParams } from "react-router-dom"

interface IProps{}

const Info:FC<IProps> = ({}) => {
    const params = useParams();
    console.log(params)
    
    return (<div>인포!</div>)
}

export default Info