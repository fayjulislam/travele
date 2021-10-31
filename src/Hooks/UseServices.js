import { useState, useEffect } from "react";

const UseServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services]
};

export default UseServices;