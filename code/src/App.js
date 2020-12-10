import React from "react";

import "./style.css";
import data from "./data";

import Header from "./Header";
import Sidebar from "./Sidebar";
import BookList from "./BookList";
import Page from "./Page";
import Footer from "./Footer";

class App extends React.Component {
    constructor() {
	super();
	this.state = {
	    book: data
	}
    }
    
    render() {
	const bookList = this.state.book.map(item => <BookList key={item.id} item={item}/>);
	const content = this.state.book.map(item => <Page key={item.id} item={item}/>);
	return (
		<div className="wrapper">
		<Header />
		<div className="content">
		<div className="booklist-container">
		{bookList}<br /></div>
		<Page />
		<Sidebar />
		</div>
		<Footer />
		</div>
	);
    }
}

export default App;
