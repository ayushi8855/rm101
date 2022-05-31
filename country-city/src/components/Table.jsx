import React, { useEffect, useState } from 'react'
import axios from "axios"
export const Table = () => {

    const [data, setData] = useState([])

    useEffect(() => {
      handleData()
    
     
    }, [])
   

    const handleData = () => {
      axios.get(` http://localhost:8080/citys`)
              .then(res => {
                const result = res.data;
                
                setData(result)
               
              })
    }

    console.log(data)

    return (
        <div>
          <div style={{marginLeft:'500px'}}>
           
            <table className="orders">
            
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Population</th>
                  <th>Edit</th>
                  <th>Delete</th>
                 
                </tr>
              </thead>
              <tbody>
                {data.map((e)=>(
                  <tr className="orders-row">
                  <td className="id">{e.id}</td>
                  <td className="Country">{e.country}</td>
                  <td className="city">{e.city}</td>
                  <td className="population">{e.population}</td>
                  <td className="edit">edit</td>
                  <td className="delete">delete</td>
                  
                 
                </tr>
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      );
}
