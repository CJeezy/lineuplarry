import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { getAgents } from '../../models/agents';
import { getMaps } from "../../models/maps";
import { getSide } from "../../models/side";
import "../css/LandingPage.css"

function LandingPage(props) {

    return (
      <div className='landing-page'>
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
                <LoadLineups
                    agent={props.selectedAgent}
                    map={props.selectedMap}
                    side={props.selectedSide}>

                </LoadLineups>
                <SubmitButton
                    _agent={props.SelectAgent}
                    _map={props.SelectedMap}
                    _side={props.SelectSide}>
                </SubmitButton>
          </div>
      </div>
    )
  }

function TitleBar(){
    return(
        <div className='title'>
            <div className='bar'></div>
            <div className='title-tags'>
                <p className='red-text'>LINEUP</p>
                <p className='blue-text'>LARRYS</p>
            </div>
        </div>
    )
}

function SelectAgent({buttonStyle, agent, setAgent}){
    const agents = getAgents();
    return(
        <div className="block">
			<p className="block-title">
				<span className="main-text">SELECT</span> AN AGENT
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
				<img src={"/images/agents/" + agents[i] + ".webp"} />
			</div>
		);
	}
    console.log(agent);
	return <div className={"agents-list"}>{AgentList}</div>;
}

function SelectMap({ buttonStyle, map, setMap }) {
	const maps = getMaps();
	return (
		<div className="block">
			<p className="block-title">
				<span className="main-text">SELECT</span> A MAP
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
        <div className="block">
			<p className="block-title">
				<span className="main-text">SELECT</span> A SIDE
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
    return <div className="maps-list">{SideList}</div>
}

function LoadLineups({agent,map,maps}) {
	return (
		<div className="block">
			<p className="block-title">
				<span className="main-text">LOAD</span>
			</p>
			<LoadedMaps agent={agent} map={map} maps={maps}></LoadedMaps>
		</div>
	);
}


function LoadedMaps(props){
	var loadedMaps = []

	if(props.maps !== undefined && (props.map !== undefined && props.agent !== undefined)){

		if(props.map in props.maps && props.agent in props.maps[props.map] ){
			var mapList = props.maps[props.map][props.agent];

			for (const [key, value] of Object.entries(mapList)) {
	
				loadedMaps.push(<a href={"/map/"+key} key={key}><div className="map-button">{mapList[key].name}</div></a>)
			}
		}
		
	}
	
	return <div className="map-list">{loadedMaps}</div>;
}

function SubmitButton({ buttonStyle,_agent,_map,_side}) {
	let navigate = useNavigate(); 
	const routeChange = () =>{ 
		let path = `lineups`; 
		navigate(path,{state:{agent:_agent,map:_map,side:_side}});
	  }
	return (

		<button className={["submit-query", buttonStyle].join(" ")} onClick={routeChange}>
			+ SUMBIT
		</button>
	);
}



export default LandingPage