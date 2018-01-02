import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            content : [
            {title: 'Events',type: 'General Requirements'},
            {title: 'Funding',type: 'General Requirements'},
            {title: 'Appropriate Venue',type: 'General Requirements'},
            {title: 'Scientific Meetings/Events ',type: 'Scientific Meetings/Events'},
            {title: 'Scientific Content',type: 'Scientific Meetings/Events'},
            {title: 'Funding via Grants',type: 'Scientific Meetings/Events'},
            {title: 'Promotional Information at Events',type: 'Promotional Events'},
            {title: 'Purpose of Consultants and Advisory Boards ',type: 'Consultants and Advisory Boards'}],
            heading:[
            {title:'General Requirements'},
            {title:'Scientific Meetings/Events'},
            {title:'Promotional Events'},
            {title:'Consultants and Advisory Boards'}]
        };
    }

    componentDidMount()
    {

    }
    render()
    {
        return(
            <div>
              <div id="tabholder">
              {this.state.heading.map(function(itemHeading,key)
                {
                    return (
                    <div key={key} className="tabcontent">
                        <h4><a href="#">{itemHeading.title}</a></h4>
                        <ul>
                        {this.state.content.map(function(item,currkey)
                            {
                                
                                return(
                                    <div key={currkey}>{itemHeading.title == item.type &&
                                        <li><a href="#">{item.title}</a></li>
                                    }</div>
                                );   
                                        
                            },this)
                        }</ul>
                    </div>
                    );
                },this)
            }
              </div> 
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("container"));