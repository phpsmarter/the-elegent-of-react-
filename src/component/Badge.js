import { Badge, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { compose, curry, map, prop } from 'ramda';

import React from 'react';

// const BtnGroup = (...badgeCount) => (
// 	<ButtonToolbar>
// 		<ButtonGroup style={{ marginTop: -20 }}>
// 			<Button><Badge></Badge></Button>
// 			<Button><Badge></Badge></Button>
// 			<Button>All <Badge></Badge></Button>
// 		</ButtonGroup>
// 	</ButtonToolbar>
// );
//var successLens = lensPath(['badge', 0,'success']);
//var infoLens = lensPath(['badge', 0,'success']);


//console.log(view(xHeadYLens, props));
//const  BtnGroup=(content)=>(<ButtonToolbar>{content}</ButtonToolbar>);
//const  BtntoolBar=(content)=>(<ButtonToolbar>{content}</ButtonToolbar>);
//const  Badge=(content)=>(<Bagde>{content}</Bagde>);
//const  getBtnGroup=compose(BtnGroup,BtntoolBar,Badge);
//const getBtn=getButtonGroup(badges);
//const MainCol= content => (<Col md={6} mdOffset={3}>{content}</Col>);

const  BadgeWithNum=(badge)=>(
	
	  
	   <Button key={badge.id} bsStyle={badge.text}>
	    {badge.text}
	     <Badge bsStyle={{marginTop:-40}}>{badge.num}</Badge>
	   </Button>
	  
	  
	  	 
	  	
	 
);

const BadgeGroup=(content)=>(
        <ButtonToolbar>
		   <ButtonGroup>
		    {content}
		   </ButtonGroup>
		</ButtonToolbar>
);
	
       
        
	




const Tab = compose(BadgeGroup, map(BadgeWithNum));
export default Tab;
