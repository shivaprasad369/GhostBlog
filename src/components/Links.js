import React from 'react'
import classes from './Links.module.css'
export default function Links(props) {
    const links=props.data.filter(data=>{
        return data.url!==null
    })
    const iLinks=props.data.filter(data=>{
        return data.url.includes('https://demo.ghost.io/');
    })
    const rLinks=props.data.filter(data=>{
        return data.url.slice(0,20)==='https://demo.ghost.io/'
    })
   
  return (<>
    <h1 style={{textAlign:'center'}}>Links</h1>
    <div className={classes.box}>
      
        <div className={classes.cards}>
            <ol>
                {/* {links.map(data=>{
                    return <li hey={data.id}><a href={data.url}>{data.url}</a></li>
                })} */}
              <li> Total Numder of Links :-
                {links.length}</li>
                <li>Total number of internal links :-
                    {iLinks.length}
                </li>
                <li>Total number of exteral links :-
                     {links.length-iLinks.length}
                </li>
            </ol>
        </div>
        <div className={classes.card1}>
                <div className={classes.inLink}>
                    <ol><h3>Internal Links</h3>
                        {iLinks.map(data=>{
                            return <>
                            <li key={data.id}>{data.title}</li>
                            <a href={data.url}>{data.url}</a></>
                        })}
                    </ol>
                </div>
                <div className={classes.rLink}>
                    <ul>
                        <h3>External Links</h3>
                    {rLinks.length>0? rLinks.map(data=>{
                            return <>
                            <li key={data.id}>{data.title}</li>
                            <a href={data.url}>{data.url}</a></>
                        }):"NO data found!..."}
                    </ul>
                </div>
        </div>
    </div>
    </>  )
}
