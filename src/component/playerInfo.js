import React,{useState} from 'react';
import './playerInfo.css';

function Playerinfo({initialname,symbol,isActive}){
    const [Playername,setPlayerName]=useState(initialname);
    const [isEditing,setisEditing]=useState(false);

    function HandleEdit(){
       
        setisEditing((editing)=>!editing);

    }
    function HandleChange(e){
        setPlayerName(e.target.value);

    }

    

    let EditablePlayerName=<span className='player-name'>{Playername}</span>
    if(isEditing){

      EditablePlayerName =<input type='text' value={Playername} onChange={HandleChange} />
    }
       
    return(
        <div className='Player-info'>
            <li className={isActive ? 'active' : undefined}>
                <ul className='player-info-list' >
                    <span> {EditablePlayerName} </span>
                    <span className='symbol'>{ symbol}</span>
                    <button onClick={HandleEdit}>{isEditing ? 'save' : 'Edit'}</button>
                </ul>
             </li>
               
        </div>
    )
}
export default Playerinfo;