import { connect } from 'react-redux';
import { fetchNews } from '../actions/actions';
import Menu from '../components/Menu';

const mapDispatchToProps = (dispatch) => {
    return {
        onCategoryClick: (id) => {
            dispatch(fetchNews(id))
        }
    }
}

const MenuContainer = connect(null, mapDispatchToProps)(Menu);

export default MenuContainer;