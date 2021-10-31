import { useState, useEffect } from "react";

const UseServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://chilling-eyeballs-31128.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services]
}; 

export default UseServices;