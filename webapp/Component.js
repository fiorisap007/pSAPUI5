//Component.js
sap.ui.define(
	["sap/ui/core/UIComponent",
		//"sap/ui/model/json/JSONModel",
		"com/dprb/logaligroup/SAPUI5/model/models",
		"sap/ui/model/resource/ResourceModel"
	],
	function (UIComponent, models, ResourceModel) {

		return UIComponent.extend("com.dprb.logaligroup.SAPUI5.Component", {
			metadata: {
				manifest: "json"
					// rootView: {
					// 	"viewName": "com.dprb.logaligroup.SAPUI5.view.App",
					// 	"type": "XML",
					// 	"async": true,
					// 	"id": "app"
					// }
			},

			init: function () {
				//call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);

				// //Set model on view :Input01
				// var oData = {
				// 	recipient: {
				// 		name: "David"
				// 	}
				// };
				// var oModel = new JSONModel(oData);
				// this.setModel(oModel);

				//Set model on view :Input02
				this.setModel(models.createRecipientModel());

				//Set i18n model on view
				var i18nModel = new ResourceModel({
					bundleName: "com.dprb.logaligroup.SAPUI5.i18n.i18n"
				});
				this.setModel(i18nModel, "i18n");

			}

		});
	}
);