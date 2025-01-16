import './Transferlist.css';
import PropTypes from 'prop-types';

function List(props) {

    const category = props.category;
    const itemcolorlist = props.items;

    const listItems = itemcolorlist.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        {item.number}</li>);


    return (
        <>
            <h1 className="h1transferlist">{category}</h1>
            <ul className="ultransferlist">{listItems}</ul>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
                                        id: PropTypes.number,
                                        name: PropTypes.string,
                                        number: PropTypes.number
    })),
};
List.defaultProps = {
    category: 'Category',
    items: []
};
export default List