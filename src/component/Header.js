import { PageHeader, small } from 'react-bootstrap';

import React from 'react';

const Header = (content) => (
	<PageHeader>
		{content} <small>Mange Life</small>
	</PageHeader>
);

export default Header;
