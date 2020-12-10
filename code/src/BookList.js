import React from "react";

import Page from "./Page"

function openBook(id) {
    let parent = document.getElementById("page");
    while (parent.firstChild) {
	parent.removeChild(parent.firstChild);
    }
    let node = document.createElement("p");
    let textNode = document.createTextNode(id);
    node.appendChild(textNode);
    parent.appendChild(node);
}

function BookList(props) {
    return (
	    <>
	    <h1></h1>
	    <a onClick={openBook.bind(this, props.item.text)} id={props.item.id}>
	    {props.item.title}<br />
	    by {props.item.author}<br />
	    </a>
	    </>
    );
}

export default BookList;
