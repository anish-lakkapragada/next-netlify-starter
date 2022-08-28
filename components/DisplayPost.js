import CommentSection from "../components/CommentSection"; 

const titleStyle={
    'font-size':'1.5em', 
    'color': '#008080'
}

const divStyle = {
    'text-align': 'center'
}

const pStyle = {
    'font-size': '1em', 
    'margin-top': '0.75em'
}

export default function DisplayPost(props) {
    let commentSection; 

    if (props.comments) {
        commentSection = <CommentSection {...props} /> 
    }

    return (
        <div style={divStyle}> 
            <h1 style={titleStyle}> #{props.id}. {props.title} </h1>
            <p style={pStyle}> {props.content} </p>    
            {commentSection}
        </div>
    )
}