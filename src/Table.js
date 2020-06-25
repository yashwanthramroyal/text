import React, { Component } from 'react';
import axios from 'axios'
import Json from './Json'
import {Routre,Route} from 'react-router'
class Table extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            count:1,
            Data:[]
        }
        
    }
    componentWillMount(){
        this.fetchdata(this.state.count)
    }
  
    componentDidMount()
    {
        setInterval(() => {
            this.setState(prev=>({
              count:prev.count+1
            }))
            this.fetchdata(this.state.count)
        },10000);
    }
    fetchdata(count){
        console.log("ssa",count)

    }
    
 fetchdata(count)
 {
    axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count}`).then(resp=>{
     console.log("resp",resp)
     this.state.Data.push(...resp.data.hits)
    // this.setState({
    //     Data:resp.data.hits
    // })
     console.log(this.state.Data,"res")

    console.log(this.state.total,"table")
     })
 }

 handlePassjson=(e,json) =>
 {
     e.preventDeault()
     console.log(json,"json")
     this.props.history.push('./jsonData',json)
 }

 
    render() { 
        const {Data} = this.state
        return ( 
        
        
        
        <div>


            <h1>Table</h1>

            <h2>{Data.length}</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                        title
                        </th>
                        <th>
                        url
                        </th>
                        <th>
                        author
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {
                      Data.length>0 ?Data.map(x=>{
                          return <tr kay={x.id} onClick={(e)=>this.handlePassjson(e,x)}>
                              <td>{x.title}</td>
                              <td>{x.url}</td>
                              <td>{x.author}</td>
                          </tr>
                      }):<></>
                  }
                </tbody>
            </table>
        </div> );
    }
}
 
export default Table;