import React from "react";

function toggleDarkMode(e) {
    e.preventDefault();
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function togglePageView(e) {
    e.preventDefault();
}

function Sidebar(props) {
    return (
	    <div className="sidebar">
	    <button onClick={toggleDarkMode}>Dark Mode</button><br /><br />
	    </div>
    );
}

export default Sidebar;
