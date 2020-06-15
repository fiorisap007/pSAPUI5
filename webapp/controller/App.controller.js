//App.controller.js
sap.ui.define(
	[ "sap/ui/core/mvc/Controller",
	  "sap/m/MessageToast"
		// "sap/ui/model/json/JSONModel",
		// "com/dprb/logaligroup/SAPUI5/model/models",
		// "sap/ui/model/resource/ResourceModel"
	],
	function (Controller, MessageToast) {
		"use strict";
		return Controller.extend("com.dprb.logaligroup.SAPUI5.controller.App", {

			onInit: function () {
				// //Set model on view :Input01
				// var oData = {
				// 	recipient: {
				// 		name: "David"
				// 	}
				// };
				// var oModel = new JSONModel(oData);
				// this.getView().setModel(oModel);

				// //Set model on view :Input02
				// this.getView().setModel(models.createRecipientModel());

				// //Set i18n model on view
				// var i18nModel = new ResourceModel({
				// 	bundleName: "com.dprb.logaligroup.SAPUI5.i18n.i18n"
				// });
				// this.getView().setModel(i18nModel, "i18n");
			},

			onShowHello: function () {
				/*eslint-disable no-alert*/
				// alert("Mensaje alert Controller");
				/*eslint-enable no-alert*/

				//MessageToast.show("Desde MessageToast");

				// read text from i18 / model
				var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
				var sName = this.getView().getModel().getProperty("/recipientModel/name");
				var sMsg = sHello.concat(" ").concat(sName);
				MessageToast.show(sMsg);

			}
		});
	}
);