import React from "react"
import { Route, Switch } from 'react-router-dom'
import ItemList from "./ItemList"
import Header from "./Header"
import NewItem from "./NewItem"

class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route exact path="/items" component={ItemList} />
          <Route exact path="/new_item" component={NewItem} />
        </Switch>
      </div>
    );
  }
}

export default App
