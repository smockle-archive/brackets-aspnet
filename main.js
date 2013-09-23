/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
	'use strict';

	var LanguageManager = brackets.getModule("language/LanguageManager");

	//C# Refine
	var csharp_language = LanguageManager.getLanguage("csharp");
	//ASP.NET File Extensions
	csharp_language.addFileExtension("master");
});