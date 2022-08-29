/**
 * WordPress dependencies
 */
import { addSubmenu } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import initBlock from '../utils/init-block';
import metadata from './block.json';
import edit from './edit';
import save from './save';
import transforms from './transforms';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon: addSubmenu,

	__experimentalLabel: ( { label } ) => label,

	edit,

	save,

	transforms,
};

export const init = () => initBlock( { name, metadata, settings } );
