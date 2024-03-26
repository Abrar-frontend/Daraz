import { useContext } from "react";
import { contextVar } from "./Context";

const useAuth = () => {
    return(
     useContext(contextVar)
    )
}

export default useAuth