export default function EmployeeListItem(firstName, lastName, jobTitle){
    let style = {
        border: '3px solid gray',
        
    }
    
    return(

        <li>
            <h3>
               {firstName},
                {lastName},
                {jobTitle} 
            </h3>
        </li>
    );
}