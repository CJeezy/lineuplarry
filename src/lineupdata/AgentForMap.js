import React from 'react'
import Killjoy from '../lineupdata/Killjoy'
import Kayo from '../lineupdata/Kayo'
import Sova from '../lineupdata/Sova'
import Viper from '../lineupdata/Viper'
import Brimstone from '../lineupdata/Brimstone'

function AgentForMap(props) {
    const {agent} = props
    const {selectedImage} = props

    if(agent === 'brimstone'){
        return(<div><Brimstone selectedImage={selectedImage}/></div>)
    }
    else if(agent === 'killjoy'){
        return(<div><Killjoy selectedImage={selectedImage}/></div>)
    }
    else if(agent === 'kayo'){
        return(<div><Kayo selectedImage={selectedImage}/></div>)
    }
    else if(agent === 'sova'){
        return(<div><Sova selectedImage={selectedImage}/></div>)
    }
    else if(agent === 'viper'){
        return(<div><Viper selectedImage={selectedImage}/></div>)
    }
}

export default AgentForMap