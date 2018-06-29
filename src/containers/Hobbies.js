import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addHobby, removeHobby } from '../actions';

class Hobbies extends Component {

	delete(id){
		this.props.remove(id);
	}

	add(){
		if (this.inp.value !== '') {
			this.props.add(this.inp.value);
			this.inp.value = '';
		}
	}

	render(){
		return (
			<div>
				<h2>Увлечения</h2>
				<div className = 'input-group mb-3'>
				  <input className = 'form-control' type = 'text' ref = {input => { this.inp = input } }/>
				  <div className = 'input-group-append'>
				    <button className = 'btn btn-success'
							onClick = {() => this.add()}>Добавить</button>
				  </div>
				</div>
				{ this.props.hobbies.map((hobby, id) => 
						<div key = {id}>
							<p>{ hobby } <span className = 'badge badge-danger'
												onClick = {(() => this.delete(id))}>Удалить</span></p>
						</div> )}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		hobbies : state.HobbiesReducer
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
	    remove : bindActionCreators(removeHobby, dispatch),
	    add : bindActionCreators(addHobby, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hobbies);