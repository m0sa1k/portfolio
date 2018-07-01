import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSkill, removeSkill } from '../actions';

import Modal from 'react-modal';
import images from '../images';

const customStyles = {
	content : {
		maxWidth    : '400px',
		top         : '40%',
		left        : '50%',
		right       : 'auto',
		bottom      : 'auto',
		marginRight : '-50%',
		transform   : 'translate(-50%, -50%)'
	}
};

Modal.setAppElement('#root');

class Skills extends Component {

	constructor() {
		super();

		this.state = {
			modalIsOpen: false,
			imgSrc: 'https://cdn-images-1.medium.com/max/540/1*eysdgvFRhsQn9l4BT5R1WA.png'
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
		this.subtitle.style.color = '#f00';
	}

	closeModal(path) {
		this.setState({
			modalIsOpen: false,
			imgSrc : path
		});
	}


	delete(id){
		this.props.remove(id);
	}

	add(){
		if (this.inputText.value !== '') {
			this.props.add({
				name : this.inputText.value,
				imgPath : this.state.imgSrc
			});
			this.inputText.value = '';
		}
	}

	render(){
		return (
			<div>
			<h2>Навыки</h2>
				<div className = 'input-group mb-1'>
					<div className = 'input-group-prepend'>
						<img className = 'm-0'
							src = {this.state.imgSrc}
							alt = ''/>
						<span className = 'input-group-text'
								onClick={this.openModal}>Лого</span>
					</div>
					<input className = 'form-control'
							placeholder = 'Навык' type = 'text' ref = {input => { this.inputText = input } }/>
				</div>
				<button className = 'btn btn-outline-success btn-block mb-2'
						onClick = {() => this.add()}>Добавить</button>

				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel = 'Example Modal'
					>

					<h2 ref={subtitle => this.subtitle = subtitle}>Выберите лого</h2>
					{
						images.map( (img, id) => <img key = {id}
												onClick={() => this.closeModal(img.imgPath)}
												src = {img.imgPath}
												alt = '' />)
					}
				</Modal>


				{ this.props.skills.map((skill, id) => 
						<div key = {id} >
						<p>
							<img className = 'm-0 mr-2'
								 src = { skill.imgPath }
								 alt = ''/>							

							{ skill.name }

							<span className = 'badge badge-danger float-right mt-2'
								onClick = {(() => this.delete(id))}>Удалить</span>					
						</p>
						</div> )}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		skills : state.SkillsReducer
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
	    remove : bindActionCreators(removeSkill, dispatch),
	    add : bindActionCreators(addSkill, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);