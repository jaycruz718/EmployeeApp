import EmployeeListItem from "./EmployeeListItem";
import employeeListData from "../utilities/employeeData.mjs";

export default function EmployeeList() {

     let style = {
    listStyle: 'none',
    margin: "0",
    padding: "0",
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  }
    
      let loadedList = employeeListData.map((em)=>{
    return <EmployeeListItem {...em} />
  })

    return (
    <ul style={style}>
     {loadedList}
    </ul>
  );
}