import React, {Component} from 'react';
import windowSize from 'react-window-size';

import Aux from "../../../../../../hoc/_Aux";
import DEMO from "../../../../../../store/constant";

class NavSearch extends Component {
    state = {
        searchWidth: (this.props.windowWidth < 992) ? 90 : 0,
        searchString: (this.props.windowWidth < 992) ? '90px' : '',
        isOpen: (this.props.windowWidth < 992)
    };

    searchOnHandler = () => {
        this.setState({isOpen: true});
        const searchInterval = setInterval(() => {
            if (this.state.searchWidth >= 91) {
                clearInterval(searchInterval);
                return false;
            }
            this.setState(prevSate => {
                return {
                    searchWidth: prevSate.searchWidth + 15,
                    searchString: prevSate.searchWidth + 'px'
                }
            });
        }, 35);
    };

    searchOffHandler = () => {
        const searchInterval = setInterval(() => {
            if (this.state.searchWidth < 0) {
                this.setState({isOpen: false});
                clearInterval(searchInterval);
                return false;
            }
            this.setState(prevSate => {
                return {
                    searchWidth: prevSate.searchWidth - 15,
                    searchString: prevSate.searchWidth + 'px'
                }
            });
        }, 35);
    };

    render() {
        let searchClass = ['main-search'];
        if (this.state.isOpen) {
            searchClass = [...searchClass, 'open'];
        }

        return (
            <Aux>
                <div id="main-search" className={searchClass.join(' ')}>
                    <div className="input-group">
                        <input type="text" id="m-search" className="form-control" placeholder="Search . . ." style={{width: this.state.searchString}}/>
                        <a href={DEMO.BLANK_LINK} className="input-group-append search-close" onClick={this.searchOffHandler}>
                            <i className="feather icon-x input-group-text"/>
                        </a>
                        <span className="input-group-append search-btn btn btn-primary" onClick={this.searchOnHandler}>
                        <i className="feather icon-search input-group-text"/>
                    </span>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default windowSize(NavSearch);