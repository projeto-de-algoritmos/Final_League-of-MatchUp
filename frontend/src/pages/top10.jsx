import Header from "../components/Header/Header";
import { Top } from "../components/Top";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Result() {
    const router = useRouter();
    const [championsArray, setChampions] = useState([]);
    const { championId } = router.query;

    useEffect(() => {
        axios.get('http://localhost:8081/matchUp', {
            params: {
                champ: championId
            }
        })
            .then(function (response) {
                setChampions(response.data);
                //    console.log(response.data);
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
                <Top id= {1} name={"Singed"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt766d98c27adfde28/5db06004347d1c6baa57be4f/RiotX_ChampionList_singed.jpg?quality=90&width=250"} percentage={54.82} /> 
                <Top id= {2} name={"Heimerdinger"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd30d85446d154070/5db05fc57d28b76cfe4397ef/RiotX_ChampionList_heimerdinger.jpg?quality=90&width=250"} percentage={53.89} /> 
                <Top id= {3} name={"Cassiopeia"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte189be8189da97ea/5db05fb1bd24496c390ae4de/RiotX_ChampionList_cassiopeia.jpg?quality=90&width=250"} percentage={53.75} /> 
                <Top id= {4} name={"Aartrox"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570145160dd39dca/5db05fa8347d1c6baa57be25/RiotX_ChampionList_aatrox.jpg?quality=90&width=250"} percentage={53.39} /> 
                <Top id= {5} name={"Pantheon"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3f84c538bd36ef02/5db05ff17d28b76cfe43980d/RiotX_ChampionList_pantheon.jpg?quality=90&width=250"} percentage={53.37} /> 
                <Top id= {6} name={"Seraphine"} image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg"} percentage={53.32} /> 
                <Top id= {7} name={"Zilean"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta32de59397f53325/5db060222dc72966da746720/RiotX_ChampionList_zilean.jpg?quality=90&width=250"} percentage={53.27} /> 
                <Top id= {8} name={"Janna"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt02bf5329f8abe45d/5db05fcedf78486c826dcd06/RiotX_ChampionList_janna.jpg?quality=90&width=250"} percentage={53} /> 
                <Top id= {9} name={"Miss Fortune"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf36fa7fd7ecb59fb/5db05fe89481396d6bdd01b8/RiotX_ChampionList_missfortune.jpg?quality=90&width=250"} percentage={53} /> 
                <Top id= {10} name={"Swain"} image={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1a64e469280b8b9f/5db060030b39e86c2f83dc25/RiotX_ChampionList_swain.jpg?quality=90&width=250"} percentage={52.31} /> 
            </div>
        </div>
    )
}
