import React, {Component} from 'react';
import axios from 'axios';
import Players from './components/Players'

export default class App extends Component {
      constructor(){
        super();
        this.state = {
          player: [],
          order: 1
      };
    }
        
    componentDidMount(){
      this.fetchPlayer()
  };
  
 fetchPlayer = () => { axios.get(`http://localhost:5000/api/players`)
  .then(res => {
      console.log(res.data);
      this.setState({
           player : res.data
          })
   })
  .catch(err => console.log(err))  
 }

      render(){
            return (
              <div>
                {this.state.player.map(play => (
                  <Players
                          key={play.id} 
                          player={play} 
                          order={this.state.order} 
                          />
                ))}
                
              </div>
            );
          }
}


