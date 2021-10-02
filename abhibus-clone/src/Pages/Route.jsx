import { Route, Switch } from "react-router"
import { Home } from "./Home"
import { Login } from "../components/login"
export const  Router = ()=>{
    return <>
    <Switch>
        <Route path='/' exact> <Home></Home> </Route>
        <Route path='/login' exact><Login></Login></Route>
        <Route>Page not found</Route>
    </Switch>
    </>
}