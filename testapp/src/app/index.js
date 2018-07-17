import React from "react";

import {render} from "react-dom";
//import {App} from "./components/app";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import {Nav} from "./components/nav";
import {Home} from "./components/home";
import {About} from "./components/about";
import {Contact} from "./components/contact";
import { NotFound } from "./components/notfound";
import createBrowserHistory from 'history/createBrowserHistory';
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Button} from './components/ButtonState'
const history = createBrowserHistory()

export class Index extends React.Component {
    render() {
        return (
            <div>
        <Header/>
        <Button />
            <BrowserRouter>
                <div className="container">
                    <Nav/>
                    {/* <Switch>  Dont Show*/}
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact} history={history}/>
                    <Route path="/list" component={List}/>
                    <Route path="/listitem" component={ListItem}/>
                   
                    {/* <Route render={NotFound} />
                    </Switch> */}
                </div>
            </BrowserRouter>
            
            <Footer/>
            </div>

        );
    }
}

render(<Index/>, document.getElementById("app"));