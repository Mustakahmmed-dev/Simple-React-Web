

const Links = ({link}) => {
    const {linkName, path} = link;

    return (
        <li className="mr-5"><a href={path}> {linkName} </a></li>
    )
}

export default Links