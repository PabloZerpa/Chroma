

import Navegation from "./Navegation";

export default function Container(props){

    return(
        <div>
            <Navegation />
            <div>
                {props.children}
            </div>
        </div>
    )
}