import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

class Docs extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Quick Installation' isOption>
                            <p> - First of all it's required to install latest Node and npm - <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">nodejs</a></p>
                            <p> - Unzip <code>datta-able-react-lite.zip</code> file, Inside that directory you will find the <code>datta-able-react-lite/</code> folder</p>
                            <p> - Open your terminal/cmd then navigate to project directory <code>datta-able-react-lite/</code></p>
                            <p> - Install npm packages using command <code>'npm install'</code>,  this will install required node.js third-party plugins into the <code>node_modules/</code> folder.</p>
                            <p> - Compile/Run project using  command  <code>'npm start'</code>, this will compile app in development mode.</p>
                            <p> - Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> to view it on browser.</p>
                            <p> - Now, You can use Datta Able React Admin Template for your application development. </p>
                            <div className='theme-bg2 text-white p-3'>
                                <p>The project was built assuming it is hosted at the server root folder of domain/platform i.e http://demo.com.</p>

                                <p>You can control this with the homepage field in your package.json.</p>
                                <p>To deploy build for sub-folder i.e http://demo.com/project-folder-name/ than "homepage" : "http://demo.com/project-folder-name/".</p>

                                <p>You  also need to set basename in ../src/config.js file.</p>
                                <p>like, basename: '/project-folder-name'</p>
                            </div>
                            <p> - Build project using command <code>'npm run build'</code>, It will create <code>build/</code> folder inside datta-able-react-lite/ folder. </p>
                            <p> - Your app is ready to be deployed. </p>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Docs;