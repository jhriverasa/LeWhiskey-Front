import React, {Component} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import "./Invoice-styles.css"

class Invoice extends Component{

    render(){
        return(
            <div>

                <h1 className="main-title">FACTURA DE VENTA</h1>
                <h2 className="main-title">INVERSIONES ALFARO ROMERO</h2>
                   
                           

                <Form className= "invoice-form-base">
                    <Form.Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Factura No. </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    disabled
                                    placeholder="12345"

                                    aria-describedby="basic-addon1"
                                />
                                </InputGroup>
                        </Col>

                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Fecha:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="21 / 08 / 2019"
                                    disabled
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label >Mesero: </Form.Label>
                            <Form.Control as="select" >
                                <option>Nombre Apellido</option>
                                <option>Mesero 2</option>
                                <option>Mesero 3</option>
                                <option>Mesero 4</option>
                                <option>Mesero 5</option>
                            </Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label >Comisionista: </Form.Label>

                            <FormControl
                                placeholder="Comisionista X"
                                aria-label="Comisionista"
                                aria-describedby="basic-addon1"
                            />
                        </Form.Group>
                    </Form.Row>

                    <hr></hr>

                    <Form.Row>
                        <Col>
                            <Form.Label >Cantidad </Form.Label>
                        </Col>
                        <Col>
                            <Form.Label >Producto </Form.Label>
                        </Col>
                        <Col>
                            <Form.Label >Descripción </Form.Label>
                        </Col>
                        <Col>
                            <Form.Label >Valor Unitario </Form.Label>
                        </Col>
                    </Form.Row>

                    <hr></hr>

                    <Form.Row>
                        <Col>
                            <FormControl
                                placeholder="Cantidad 1"
                                aria-describedby="basic-addon1"
                                type="number"
                                min= "0"
                            />
                        </Col>
                        <Col>
                            <Form.Control as="select" >
                                <option>Producto 1</option>
                                <option>Producto 2</option>
                                <option>Producto 3</option>
                                <option>Producto 4</option>
                                <option>Producto 5</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <FormControl
                                placeholder="Descripción 1"
                                aria-describedby="basic-addon1"
                            />
                        </Col>
                        <Col>
                            <FormControl
                                placeholder="Valor unitario 1"
                                aria-describedby="basic-addon1"
                            />
                        </Col>
                    </Form.Row>


                    <Form.Row>
                        <Col>
                            <FormControl
                                placeholder="Cantidad 2"
                                aria-describedby="basic-addon1"
                                type="number"
                                min= "0"
                            />
                        </Col>
                        <Col>
                            <Form.Control as="select" >
                                <option>Producto 1</option>
                                <option>Producto 2</option>
                                <option>Producto 3</option>
                                <option>Producto 4</option>
                                <option>Producto 5</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <FormControl
                                placeholder="Descripción 2"
                                aria-describedby="basic-addon1"
                            />
                        </Col>
                        <Col>
                            <FormControl
                                placeholder="Valor unitario 2"
                                aria-describedby="basic-addon1"
                            />
                        </Col>
                    </Form.Row>

                    
                    <Form.Row>
                        <Col>
                            <Button variant="outline-success" className="button-manage-product">+Añadir producto</Button>
                        </Col>
                        <Col>
                            <Button variant="outline-danger"  className="button-manage-product">-Quitar producto</Button>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Form.Row>
                   
                    <hr></hr>


                    <Form.Row>
                        <Col>
                            <Form.Label >Forma de pago </Form.Label>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Form.Row>

                    <Form.Row>
                        <Col>
                            <Form.Control as="select" >
                                <option>Efectivo</option>
                                <option>Tarjeta de Crédito</option>
                                <option>Cheque</option>
                                <option>Otro</option>
                            </Form.Control>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>

                    </Form.Row>

                    <Form.Row>
                        <Col>
                            <Form.Label >Totales e impuestos </Form.Label>
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Subtotal:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="12345"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">IVA (19%):</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="12345"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Servicio (10%):</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="12345"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3" >
                                <InputGroup.Prepend>
                                <InputGroup.Text  id="basic-addon1"> <b>TOTAL $</b>:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    placeholder="12345"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col></Col>
                        <Col>
                            <Button variant="outline-primary" size= "lg">Guardar Factura!</Button>
                        </Col>
                        <Col></Col>
                    </Form.Row>

                </Form>

               
            
            </div>
        );
    }
}

export default Invoice;

