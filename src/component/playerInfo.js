import React,{useState} from 'react';

function Playerinfo({initialname,symbol}){
    const [Playername,setPlayerName]=useState(initialname);
    const [isEditing,setisEditing]=useState(false);
    function HandleEdit(){
        setisEditing((editing)=>!editing);
    }
    function HandleChange(e){
        setPlayerName(e.target.value)

    }

    let EditablePlayerName=<span className='player-name'>{Playername}</span>
    if(isEditing){

      EditablePlayerName =<input type='text' value={Playername} onChange={HandleChange} />
    }
       
    return(
        <div className='Player-info'>
                <ul className='player-info-list'>
                    
                    <span> {EditablePlayerName} </span>
                    <span className='symbol'>{ symbol}</span><span>    </span>
                    <button onClick={HandleEdit}>{isEditing ? 'save' : 'edit'}</button>
                 </ul>

        </div>
    )
}
export default Playerinfo;