import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation} from 'react-router-dom'

function Lineups() {
    
    const location = useLocation();
    const [_agent_name, set_agent_name] = useState(
		location.state !== null ? location.state.agent : undefined
	);

    
    console.log(_agent_name)

  return (
  <div>{_agent_name}</div>
  )
}

function LoadData(set_agent_name){

}

export default Lineups