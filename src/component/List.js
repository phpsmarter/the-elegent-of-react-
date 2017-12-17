import { Badge, Button, ButtonGroup, ButtonToolbar, Col, Grid, ListGroup, ListGroupItem } from 'react-bootstrap';
import { compose, curry, map, prop } from 'ramda';

import React from 'react';

//import { render } from 'react-dom'




const List = (items) => <ListGroup>{items}</ListGroup>;
const Item = (todo) => (
	<ListGroupItem bsStyle={todo.complete} key={todo.id}>
		{todo.text}
	</ListGroupItem>
);
//const Container = (content) => <Grid>{content}</Grid>;
// const BtnGroup = (...badgeCount) => (
// 	<ButtonToolbar>
// 		<ButtonGroup style={{ marginTop: -20 }}>
// 			<Button>Complete  <Badge></Badge></Button>
// 			<Button>Success <Badge></Badge></Button>
// 			<Button>All <Badge>42</Badge></Button>
// 		</ButtonGroup>
// 	</ButtonToolbar>
// );
// const  BtnGroup=(content)=>(<ButtonToolbar>{content}</ButtonToolbar>);
// const  BtntoolBar=(content)=>(<ButtonToolbar>{content}</ButtonToolbar>);
// const  Badge=(content)=>(<Bagde>{content}</Bagde>);
// const  getBtnGroup=compose(BtnGroup,BtntoolBar,Badge);
// const getBtn=getButtonGroup(badges);
//const MainCol= content => (<Col md={6} mdOffset={3}>{content}</Col>);
	
       
        
	



//const getTodos = prop('todos');
//const getBadge = prop('badge');
const TodoList = compose(List, map(Item));
export default TodoList;
