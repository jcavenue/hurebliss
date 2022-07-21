import { Link } from "react-router-dom";


const Unauthorized = () => {
	return (
		<>
			<h2>Access Denied</h2>	
			<p>You are not authorized to access this page you must login first to continue</p>
			<Link to="/login"><p>Go to login Page</p></Link>
		</>
	);
}
export default Unauthorized;