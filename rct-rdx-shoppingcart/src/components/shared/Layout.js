import React, { Component } from 'react'

import { Row, Col } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//className="col offset-md-4 col-md-4"

export default class Layout extends Component {

    render() {
        const childrenArr = React.Children.toArray(
            this.props.children
        );

        return (
            <div >
                <header>
                    <h1 style={{textAlign:'center'}}>Minimal React-Redux Shopping Cart App</h1>
                </header>
                <hr/>
                <main >
                    <Row>
                        <Col className="col">
                            {
                                childrenArr.length > 0
                                &&
                                childrenArr[0]
                            }
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className="col">
                            {
                                childrenArr.length > 1
                                &&
                                childrenArr[1]
                            }
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className="col">
                            {
                                childrenArr.length > 2
                                &&
                                childrenArr[2]
                            }
                        </Col>
                    </Row>
                </main>
                <hr/>
                <footer>
                    <small>Author: Gerson Ramirez</small> <small style={{float:'right'}}>License: MIT</small>
                </footer>
            </div>
        )
    }
}
