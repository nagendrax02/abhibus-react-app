import { Route, Switch } from "react-router"
import { Offer } from "./Offers"
import { Home } from "./Home"
export const  Router = ()=>{
    return <>
    <Switch>
        <Route path='/' exact> <Home></Home> </Route>
        <Route exact path='/offers'> <Offer></Offer> </Route>
        <Route>Page not found</Route>
    </Switch>
    </>
}