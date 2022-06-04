import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiFillHome, AiOutlineLogin, AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAccountBox } from 'react-icons/md';
import { connect } from 'react-redux';
import '../App.css'

const VisitorsLinks = (props) => {
    
	return (
		<div>
			<nav className="navbar" style = {{background : '#206a5d',color: '#fff'}}>
            
				<h3>
					<Link to="/index" style={{textDecoration: 'none'}}>C&E Information</Link>
				</h3>
				<div>
                    <ul>
                        <li>
                            <Link to="/login" style={{textDecoration: 'none'}}>
                                <AiOutlineLogin /> Log in
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" style={{textDecoration: 'none'}}>
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

export default VisitorsLinks;