import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <h1>React App 1 is mounted!</h1>
    )
}

// ReactDOM.render(<App />, document.getElementById('app1-container'))

module.exports = {
    bootstrap: function(props) {
        console.log('React app 1 bootstrap. Props:', props)
        return Promise
            .resolve()
            .then(() => {
    
            })
    },
    mount: function(props) {
        console.log('React app 1 mount. Props:', props);
        return Promise
            .resolve()
            .then(() => {
                ReactDOM.render(<App />, document.getElementById('app1-container'));
            })
    },
    unmount: function(props) {
        console.log('React app 1 unmount. Props:', props);
        return Promise
            .resolve()
            .then(() => {
                ReactDOM.unmountComponentAtNode(document.getElementById('app1-container'));
            })
    }
}
