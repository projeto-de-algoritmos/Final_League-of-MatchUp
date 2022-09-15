import Header from "../components/Header/Header";
import { Top } from "../components/Top";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Result() {
    const [championsArray, setChampions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/winrate')
            .then(function (response) {
                setChampions(response.data);
                    console.log('teste');
                    console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            })
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div style={{
                position: 'absolute',
                top: '10px',
                left: '5px',
            }}>
                <a style={{
                    fontSize: '20px',
                    backgroundColor: 'rgb(219, 219, 219)',
                    borderRadius: '10px',
                    padding: '2px'
                }} href="/">Voltar</a>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h1 style={{
                    fontWeight: '450',
                    marginTop: '50px'
                }}>Top 10 Winrate:</h1>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {championsArray.slice(0,10).map((champion, index) => <Top position={index+1} name={champion.name} image={champion.image} percentage={champion.winrate}/>)}
            </div>
        </div>
    )
}
