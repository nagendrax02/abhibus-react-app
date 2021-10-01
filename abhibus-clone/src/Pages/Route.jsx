import { Route, Switch } from "react-router"
import { Home } from "./Home"
export const  Router = ()=>{
    return <>
    <Switch>
        <Route path='/' exact> <Home></Home> </Route>
        <Route>Page not found</Route>
    </Switch>
    </>
}