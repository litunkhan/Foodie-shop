import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu,setmenu] = useState([])
    const[search,setsearch] = useState('')
    const [loading,setloading] = useState(true)
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_URL}/menu`)
        .then(res=> res.json())
        .then(data=>{
            const searchData = data.filter(names=>names.name.toLowerCase().includes(search.toLowerCase()))
            setmenu(searchData)
            setloading(false)
        })
    },[search])
    return [menu,loading,setsearch]
};

export default useMenu;