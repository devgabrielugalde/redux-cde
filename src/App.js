import React from 'react';
import { Provider } from "react-redux";
import store from './Store/index';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/index';
import Body from './Components/Body/index';

function Core (props) {
    return (
        <div className="App">
            <Header title={props.content}/>
            <Body content={props.content} loja={props.props.match.params.loja}/>
        </div>
    )
}

function App() {
	return (
		<Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/:loja' exact={true} component={(props) => <Core props={props} content={'bopis'}/>}></Route>
                </Switch>
            </Router>
        </Provider>
	);
}

export default App;
