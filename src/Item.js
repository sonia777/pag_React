import React from 'react';
import './Item.css';

class Item extends React.Component{

    constructor(props) {
        super(props);

             this.state= {
                   title: '',
                   image: '',
                   rating: 1,
                   stars: []
             };
    }
   
            componentDidMount(){
            this.setState({
                           id: this.props.title,
                           title: this.props.image,
                           rating: parseInt(this.props.rating),
                           stars: Array(parseInt(this.props.rating)).fill(0)
                          });
            }

            onChangeRating = (e) =>{
             const rating = parseInt(e.targer.value);
             this.setState({
                            rating: parseInt(e.targer.value),
                            stars: Array(parseInt(e.targer.value)).fill(0)
                           });
            }       
      
    render(){
       return(
        <div className="item">
            <div className="image"><img src={'img/' + this.props.image} width="100%" /></div>
            <div className="title">{this.props.title}</div>
            <div className="rating">
                  <p>{
                       this.state.stars.map(x =>
                        <img src="img/star.png" width="15" />
                        )
                     }
                 </p>
                 Calificacion:
                 <select value={this.props.rating}  onChange={this.onChangeRating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                 </select>
            </div>
             <div className="actions">
                 <button>Eliminar</button>
             </div>
        </div>
        );
    }
}

export default Item;