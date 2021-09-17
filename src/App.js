import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component {

  constructor(props){
    super(props);

        this.state = {
          books:[
              {id:0, rating:4, title: 'Harry Potter y el caliz de fuego', image: 'libro01.jpg'},
              {id:1, rating:3, title: 'The shinig', image: 'libro02.jpg'},
              {id:2, rating:5, title: 'Codigo Da Vinci', image: 'libro03.jpg'},
              {id:3, rating:5, title: 'El principito', image: 'libro04.jpg'},
              {id:4, rating:5, title: 'Sobrenatural', image: 'libro05.jpg'}  
           ],
           copyBooks: []
          };
  }

  componentDidMount(){
    this.initBooks();
  }

  initBooks = () =>{
    this.setState((state,props) => ({
      copyBooks: [...this.state.books]
    }));
  }
  
    onAdd = (item) =>{
      let temp = [...this.state.books];
      const id = temp[temp.lenght-1].id ++;
      item['id'] = id;
      temp.push(item);

      this.setState({book: [...temp]});
      this.initBooks();
    }

  onSearch = (query) =>{
    if(query = ''){
         this.initBooks();
         }else{
               const temp = [...this.state.books];
               let res = [];

                temp.forEach(item =>{
                if(item.title.toLowerCase().indexOf(query) > -1){
                    res.push(item);
                }
                });
              this.setState({copyBooks: [...res]});
              }
  }
 
  render(){
     return (
         <div className="app">
            <Menu title="PlayBook" onadd={this.onAdd} onsearch={this.onSearch} />
            <List items={this.state.copyBooks} />
         </div>
     );
   }

}
export default App;
