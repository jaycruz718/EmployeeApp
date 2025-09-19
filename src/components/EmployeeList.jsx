import EmployeeListItem from "./EmployeeListItem";
import EmployeeListData from "../utilites/employeeData.mjs";

export default function EmployeeList() {

    let style = {
        listDecoration: 'none',
        margin: "0",
        padding: "0"
    };
    
    let loadedData = EmployeeListData.map((em)=> {
        return <EmployeeListItem {...em} />
    })

    return(
         <ul>
            <li>Employee List</li>
            <li>Employee List</li>
            <li>Employee List</li>
            <li>Employee List</li>
            <li>Employee List</li>
            <li>Employee List</li>
        </ul>
 
    );
}