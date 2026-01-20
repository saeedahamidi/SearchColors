import {useState} from 'react'
import './SearchBox.css'
function SearchBox() {
    const [search,setsearch]=useState('');

    let array=[
        {name:'red',divColor:'red'},
        {name:'blue',divColor:'blue'},
        {name:'green',divColor:'green'},
        {name:'yellow',divColor:'yellow'},
        {name:'orange',divColor:'orange'},
        {name:'black',divColor:'black'},
        {name:'pink',divColor:'pink'},
        {name:'purple',divColor:'purple'}
    ]
    let filterSearch=array.filter((value)=>(
        value.name.includes(search)
    ))
    
return(
    <>
    <div className="container">
        <h2 style={{color:'white'}}>Finding Color</h2>
    <SiblingOne onSearch={setsearch}/>
    <SiblingTwo data={filterSearch}/>
    </div>
    </>
)
}
function SiblingOne({onSearch}) {
    function handleChange(e) {
        onSearch(e.target.value)
    }
    return(
        <>
        <input type='text' placeholder='Enter the name of color'onChange={handleChange}/>
        </>
    ) 
}
function SiblingTwo({data}) {
    return(
        <>
        <ul>
            {data.map((value)=>(
            <li style={{display:'flex',alignItems:'center',marginBottom:'8px'}}>
               
               <div style={{
                width:'20px',
                height:'20px',
                backgroundColor: value.divColor ,
                marginRight:'10px',
                border:'1px solid #999'
               }}></div>
                 ColorName:{value.name}
               </li>
        ))}
        </ul>
        </>
    )
    
}
export default SearchBox;
