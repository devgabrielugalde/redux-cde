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
            <Header title={props.title}/>
            <Body content={props.content}/>
        </div>
    )
}

function App() {
	return (
		<Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/' exact={true}>
                        Painel de entregas<br></br>
                        <a href="/loja"><strong>Loja</strong></a><br></br>
                        <a href="/farma"><strong>Farma</strong></a><br></br>
                        <a href="/bopis"><strong>Bopis</strong></a>
                    </Route>
                    <Route path='/loja' exact={true}>
                        <Core title={'Loja'} content={'loja'}/>
                    </Route>
                    <Route path='/farma' exact={true}>
                        <Core title={'Farma'} content={'farma'}/>
                    </Route>
                    <Route path='/bopis' exact={true}>
                        <Core title={'bopis'} content={'bopis?loja=101'}/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
	);
}

export default App;
