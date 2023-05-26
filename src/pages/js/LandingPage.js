import { getAgents } from '../../models/agents';
import { getMaps } from "../../models/maps";
import { getSide } from "../../models/side";
import "../css/LandingPage.css"

import BrimAscent from "../../lineupdata/BrimAscent";

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
				<SelectSide
					side={props.selectedSide}
					setSide={props.setSelectedSide}>
				</SelectSide>
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
			Play post! I have lineups!
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

function SelectSide({buttonStyle, side, setSide}){
    const sides = getSide();
    return(
        <div className="data-box">
			<p className="data-box-title">
				<span className="main-text">SIDE</span>
			</p>
            <SideList 
                buttonStyle={buttonStyle}
				sides={sides}
				side={side}
				setSide={setSide}
            ></SideList>
		</div>
    )
}

function SideList ({buttonStyle, sides, side, setSide}){
    const SideList = [];

    for (var i = 0; i < sides.length; i++){
        const _side = sides[i]
        SideList.push(
            <div
                key={i}
                className={[side === sides[i] ? "selected-side" : "side", side === sides[i]?"":buttonStyle].join(
                    " "
                )}
                onClick={() => setSide(_side)}>
                {capitalizeFirstLetter(sides[i])}
            </div>
        )
    }
    console.log(side)
    return <div className="side-list">{SideList}</div>
}

function LoadLineups({agent,map,side}) {
	return (
		<div className="data-box">
			<LoadedMaps agent={agent} map={map} side={side}></LoadedMaps>
		</div>
	);
}


function LoadedMaps(props){
	if(props.agent === "brimstone" && props.side === "defense"){
		return(<NoLineups/>)
	}
	else if(props.agent === "brimstone" && props.map === "ascent"){
		return(<BrimAscent></BrimAscent>)
	}


	
}

function NoLineups(){
	return(
		<div>
			No lineups needed for this side or map! Only post-plant molly lineups are available
		</div>
	)
}


export default LandingPage