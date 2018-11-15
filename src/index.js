import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DOMPurify from 'dompurify';
import registerServiceWorker from './registerServiceWorker';

const marked = require('marked');

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			markedUp: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let newInput = event.target.value;
		this.setState({input: newInput,
			markedUp: DOMPurify.sanitize(marked(newInput))
		});
	}

	componentWillMount() {
		let preFill = "# My markdown previewer includes a header, \r\r## a sub-header, \r\r### [a link,](http://www.catsinsinks.com/ \"Cats in Sinks\") \r\rand some `inline code`. \r\rYou can also write multiline code!\r ``` \rfunction compareBy(a, b) {\r    return a-b; \r} \r ``` \r \r List items are marked with: \r- a hyphen (-) \r- or an asterisk (*) \r\r > \"Blockquotes are indi-\r\r > cated with greater than signs, \r\r > like with this haiku.\" \r\r**You can bold text with double italics or underscores.** \r\rIt is also super easy to show an image in markdown: \r\r ![Image of Hovercat](http://i0.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg)";
		this.setState({input: preFill,
			markedUp: marked(preFill)
		});
	}

	render() {
		return (
			<div id="wrapper">
			<div id="editor"> 
			<h2>Input your markdown here:</h2>
			<textarea rows="35" cols="80" defaultValue={this.state.input} onChange={this.handleChange}></textarea><br/>
			<br/><br/></div>
			<div id="preview">
			<h2>Previewer:</h2>
			<div id="preview-text" dangerouslySetInnerHTML={{__html: this.state.markedUp}}></div></div></div>
		);

	}
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export { Input };