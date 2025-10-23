export default function Listy(){
    const users = ['john','Jill','Joan','Jenny']

    const listItems = users.map((user, index) => {
        return <li key ={index}>{user}</li>
    });

    return(
            <ul>
                {listItems}
            </ul>
    );
}