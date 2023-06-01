import { getAgents } from '../../models/agents';
import { getMaps } from "../../models/maps";
import "../css/LandingPage.css"

import HavenInfo from "../../maps/HavenInfo";
import AscentInfo from '../../maps/AscentInfo';
import BindInfo from '../../maps/BindInfo';
import FractureInfo from '../../maps/FractureInfo'
import IceboxInfo from '../../maps/IceboxInfo'
import PearlInfo from '../../maps/PearlInfo'
import SplitInfo from '../../maps/SplitInfo'
import LotusInfo from '../../maps/LotusInfo'

function LandingPage(props) {

    return (
      <><div className='landing-page'>
			<div className='wrapper'>
				<TitleBar></TitleBar>
				<SelectAgent
					agent={props.selectedAgent}
					setAgent={props.setSelectedAgent}></SelectAgent>
				<SelectMap
					map={props.selectedMap}
					setMap={props.setSelectedMap}></SelectMap>

			</div>
		</div>

		<div className='lineup-page'>
			<LoadLineups
				agent={props.selectedAgent}
				map={props.selectedMap}
				side={props.selectedSide}>
			</LoadLineups>
		</div></>
    )
  }

function TitleBar(){
    return(
        <div className='title'>
            <div className='title-tags'>
                <p className='red-text'>LINEUP</p>
                <p className='blue-text'>LARRYS</p>
				
            </div>
			<div className='side-text'>
				Play Post! I have lineups!
				<div className='disclaimer'>
					*This site is dedicated only to post-plant molly lineups <br></br>
					For other types of lineups and such go to <a href ='https://valoplant.gg/'>Valoplant.gg</a>
				</div>
			</div>
			
        </div>
    )
}

function SelectAgent({buttonStyle, agent, setAgent}){
    const agents = getAgents();
    return(
        <div className="data-box">
			<p className="data-box-title">
				<span className="main-text">AGENT</span>
			</p>
			<AgentList
				buttonStyle={buttonStyle}
				agents={agents}
				agent={agent}
				setAgent={setAgent}></AgentList>
		</div>
    )
}

function AgentList({ buttonStyle, agents, agent, setAgent }) {
	const AgentList = [];
	for (var i = 0; i < agents.length; i++) {
		const _agent = agents[i]
		AgentList.push(
			<div
				key={i}
				className={[
					agent === agents[i] ? "selected-agent" : "agent",
					agent === agents[i] ? "" : buttonStyle,
				].join(" ")}
				onClick={()=>setAgent(_agent)}>
				<img alt="agent list" src={"/images/agents/" + agents[i] + ".webp"} />
			</div>
		);
	}
    console.log(agent);
	return <div className={"agents-list"}>{AgentList}</div>;
}

function SelectMap({ buttonStyle, map, setMap }) {
	const maps = getMaps();
	return (
		<div className="data-box">
			<p className="data-box-title">
				<span className="main-text">MAP</span>
			</p>
			<MapList
				buttonStyle={buttonStyle}
				maps={maps}
				map={map}
				setMap={setMap}></MapList>
		</div>
	);
}

function MapList({ buttonStyle, maps, map, setMap }) {
	const MapsList = [];

	for (var i = 0; i < maps.length; i++) {
		const _map = maps[i]
		MapsList.push(
			<div
				key={i}
				className={[map === maps[i] ? "selected-map" : "map", map === maps[i]?"":buttonStyle].join(
					" "
				)}
				onClick={() => setMap(_map)}>
				{capitalizeFirstLetter(maps[i])}
			</div>
		);
	}

    console.log(map);
	return <div className="maps-list">{MapsList}</div>;
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}


function LoadLineups({agent,map}) {
	if(map==='haven'){
		return(<HavenInfo agent={agent}/>)
	}
	else if (map==='ascent'){
		return (<AscentInfo agent={agent}/>)
	}

	switch(map){
		case 'ascent' : return(<AscentInfo agent={agent}/>)
		case 'haven' : return(<HavenInfo agent={agent}/>)
		case 'bind' : return(<BindInfo agent={agent}/>)
		case 'fracture' : return(<FractureInfo agent={agent}/>)
		case 'icebox' : return(<IceboxInfo agent={agent}/>)
		case 'pearl' : return(<PearlInfo agent={agent}/>)
		case 'split' : return(<SplitInfo agent={agent}/>)
		case 'lotus' : return(<LotusInfo agent={agent}/>)
		default : ; 
	}
}


// function LoadedMaps(props){
// 	// if(props.agent === "brimstone" && props.side === "defense"){
// 	// 	return(<NoLineups/>)
// 	// }
// 	// else if(props.agent === "brimstone" && props.map === "ascent" && props.side === 'attack'){
// 	// 	return(<BrimAscent></BrimAscent>)
// 	// }
// 	if(props.map === 'haven'){
// 		return(<HavenInfo pro/>)
// 	}

	
// }



export default LandingPage