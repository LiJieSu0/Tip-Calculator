
import { useContext } from "react";
import { myData } from "../GlobalContext";

export default function tmp(){
    const v=useContext(myData);
    console.log(v);
}