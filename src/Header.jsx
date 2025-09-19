import Header from "./Header";
import SearchBar from "./components/SearchBar";

export default function Header() {
    return(
        <>
            <h1>{props.children}</h1>
        </>

    );
    
}