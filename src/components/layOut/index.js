import { Fragment } from "react";
import Header from "./header";
export default function LayOut({children}){
    return( <Fragment>
                 <Header/>
                 {children}
             </Fragment>
     )}