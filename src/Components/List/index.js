import { useEffect, useState } from "react";
import { URL } from "../../Utils";
// import { Spin } from "antd";


const List = () => {
    const [data, setdata] = useState([]);
    const [value, setvalue] = useState('');

    const isloading = false;

    const gettingData = async () => {
        if(value === '') {
            const response = await fetch(`${URL}/all`);
            const data = await response.json();
            setdata(data);
        } else {
            const response = await fetch(`${URL}/name/${value}`);
            const data = await response.json();
            setdata(data);
        }
      }
     
      useEffect(()=>{
        gettingData()
      }, [value])



    const SearchInput = (event) => {
        setvalue(event.target.value);
    };

    return data.length ? (
        <>
            <input type="text" value={value} onChange={SearchInput}></input>
            <div className="div">
                {   data.map (item => {
                    const { cca2, flags, timezones } = item;
                        return (
                            <div key={item.cca2}>
                                <h2>{item.name.common}</h2>
                                <h3>{timezones }</h3>
                                <h4>{cca2 }</h4>
                                <img src={flags.png} className="img" />
                            </div>
                        )
                    })
                }
            </div>
        </>
    ):(
        <>
            <input type="text" value={value} onChange={SearchInput}></input>
            <h2>Country is not found ...</h2>
        </>
    )
};

export default List;




