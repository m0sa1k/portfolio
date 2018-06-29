import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSkill, removeSkill } from '../actions';

class Skills extends Component {

	delete(id){
		this.props.remove(id);
	}

	add(){
		if (this.inputText.value !== '') {
			this.props.add(this.inputText.value);
			this.inputText.value = '';
		}
	}

	render(){
		return (
			<div>
			<h2>Навыки</h2>
				<div className = 'input-group mb-3'>
				  <input className = 'form-control' type = 'text' ref = {input => { this.inputText = input } }/>
				  <div className = 'input-group-append'>
				    <button className = 'btn btn-success'
							onClick = {() => this.add()}>Добавить</button>
				  </div>
				</div>

				{ this.props.skills.map((skill, id) => 
						<div key = {id} >
							<p>{ skill } <span className = 'badge badge-danger'
												onClick = {(() => this.delete(id))}>Удалить</span></p>							
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