/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function(config) {
	// Define changes to default configuration here. For example:
	config.language = 'tr';
	config.uiColor = '#e7e7e7';
	config.skin = 'kama';

	config.extraPlugins = 'syntaxhighlight,autogrow,uicolor';
	config.removePlugins = 'elementspath,resize';
	config.autoParagraph = false;
	config.entities = false;
	config.allowedContent = true;
	config.protectedSource.push(/<i[^>]*><\/i>/g);
};
CKEDITOR.on('dialogDefinition', function(ev) {
	ev.data.definition.resizable = CKEDITOR.DIALOG_RESIZE_NONE;
});