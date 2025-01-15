import PropTypes from 'prop-types';

function UserGreeting(props) {
    return (props.isLoggedIn ? <h1>Welcome {props.username}!</h1> : <h1>Please log in</h1>);
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting;
