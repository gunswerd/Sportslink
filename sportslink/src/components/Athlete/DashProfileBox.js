import React from 'react'
import './DashProfileBox.css'

class DashProfileBox extends React.Component{
    render(){
        return <div className="personalProfileBox">
                    <div className="personalPic">
                        <img src="logo512.png"/>
                    </div>
                    <div className="personalProfileName">
                        Profile Name
                    </div>
                    <div className="buttons">
                    <div className="button">
                        Profile
                    </div>
                    <div className="button">
                        Log Out
                    </div>
                    </div>


                </div>
    }
}

export default DashProfileBox