import './App.css';
import Header from './components/Header'
import SimpleCard from './components/Cards'
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Comments } from './components/Comments';
import { Search } from './components/Search';

function App() {
  const [list,setList] = useState([])
  useEffect(() => {
    fetch('http://hn.algolia.com/api/v1/search?tags=front_page')
    .then(res => res.json())
    .then((result) => {
        console.log(result.hits)
        setList(result.hits)
      }, 
      (error) => {
        console.log(error);
      }
    )
  },[])

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/heroes/:id" component={Comments} />
        <Route path="/search/:id" component={Search} />          
        <Route path="/">
            <Header/>
            {
              list.map((list) =>
              <SimpleCard 
                key={list.objectID} 
                title={list.title} 
                url={list.url} 
                num_comments = {list.num_comments} 
                created_at = {list.created_at} 
                author = {list.author} 
                points = {list.points} 
                id = {list.objectID} 
              />
              )
            } 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App; 