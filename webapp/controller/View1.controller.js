sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("NewProject.controller.View1", {
		onPress: function(oEvent){
			alert("hello world");
		}
	});
});