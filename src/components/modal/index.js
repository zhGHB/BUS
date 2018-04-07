/**
 * Created by luojie on 2018/1/4.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component {
	static defaultProps = {
		open: false
	};
	componentWillReceiveProps(nextProps) {
		if (nextProps.open && !this.props.open) { // 从无到有
			this.node = document.createElement('div'); // 创建 DOM
			this.node.className = 'dialog-modal-wrapper'; // 给上 ClassName
			document.getElementsByTagName('body')[0].appendChild(this.node) // 给 body 加上刚才的 带有 className 的 div
			const style = require('./style.scss'); // css 样式
			const {children, ...rest} = nextProps;
			let modal = (
				<div className="dialog-modal-container">
					<div className={style.mask} {...rest}></div>
					{nextProps.children}
				</div>
			);
			// 这个时候创建了 Modal 的虚拟 Dom
			let allClass = document.getElementsByClassName('dialog-modal-wrapper');
			ReactDOM.render(modal, allClass[allClass.length - 1]) // 之所以这么写，是因为能重复打开Modal，因为每一次打开Modal，都会建立一个div
		}
		if (this.props.open && !nextProps.open) { // 从有到无
			ReactDOM.unmountComponentAtNode(this.node) // 调用 react-dom unmountComponentAtNode方法，将Modal解除。
		}
	}
	render() {
		return null
	}
}
