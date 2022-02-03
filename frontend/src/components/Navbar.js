import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiFillHome, AiOutlineLogin, AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAccountBox } from 'react-icons/md';
import { connect } from 'react-redux';
import '../App.css'

const Navbar = (props) => {
    
	return (
		<div>
			<nav className="navbar" style = {{background : '#206a5d',color: '#fff'}}>
				<h1>
					<Link to="/index">C&E Information</Link>
				</h1>
				<div>
                    <ul>
                        <li>
                            <Link to="/employees">
                                <AiOutlineEdit /> Employee Information
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                <AiOutlineLogin /> Log in
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <MdOutlineAccountBox /> Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
			</nav>
		</div>
	);
};

// Navbar.propTypes = {
// 	logout: PropTypes.func.isRequired,
// 	auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
// 	auth: state.auth,
// });

// export default connect(mapStateToProps, { logout })(Navbar);

export default Navbar;