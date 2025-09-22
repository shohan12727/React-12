import { useEffect, useState } from "react"

export default function Albams () {

  
    const [albams, setAlbams] = useState([]);
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then( data => setAlbams(data))
    }
        
        ,[])      

    return (
        <div className="card">
            <h4>Albams: {albams.length}</h4>
            <ol>
                {
                    albams.map(albam => <li style={{
                        fontWeight: 'bold',
                        marginBottom: '20px'
                    }}>{albam.title}</li>)
                }
            </ol>
        </div>
    )
}