import React, {Component} from 'react';
import axios from 'axios';
import PlayersData from './components/Players';
import Choose from './components/Choose'

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
            console.log('Fetch Player results',res.data);
            this.setState({
                player : res.data
                })
        })
        .catch(err => console.log(err))  
      }

      render(){
                  
            return (
             
              <div>
                <h1 id='test'>Women's Athlete Application</h1>

              

                <Choose 
                  order={this.state.order} 
                  setOrder={ number => this.setState({ order: number})}
                  player= {this.state.player}
                  setPlayer={newPlayers => this.setState({ player: newPlayers})} />

                  {this.state.player.map(play => (
                    <PlayersData
                            key={play.id} 
                            player={play} 
                            order={this.state.order} 
                            />
                ))}
                
              </div>
            );
          }
}


