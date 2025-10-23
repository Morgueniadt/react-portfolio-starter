const ModuleTitle = (props) => {

    

    return(
        <>
            <h1>Welcome to the { props.title } module.</h1>
            <p>there are {props.students} students in this module </p>
     
        </>
    );
};

export default ModuleTitle;