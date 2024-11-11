import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
export default function LayOut({children}){
    return( <Fragment>
                 <Header/>
                 {children}
                 <Footer/>
             </Fragment>
     )}