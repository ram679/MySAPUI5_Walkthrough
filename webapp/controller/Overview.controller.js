
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], 

  function(Controller , JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.Overview", {
        onInit() {

            // alert("On Init called");
            //Create a data object
            
            var oData = {
                "title":"My Orders",
                "SalesOrderSet": [{
                    "SalesOrderId":"0001",
                    "CustomerName":"Apple",
                    "LifeCycleStatusDescription":"Completed",
                    "LifeCycleStatus":"Success",
                    "GrossAmount":"250",
                    "CurrencyCode":"USD"
                },
               {
                    "SalesOrderId":"0002",
                    "CustomerName":"Google",
                    "LifeCycleStatusDescription":"Completed",
                    "LifeCycleStatus":"Success",
                    "GrossAmount":"350",
                    "CurrencyCode":"USD"
                },
               {
                    "SalesOrderId":"0003",
                    "CustomerName":"Amazon",
                    "LifeCycleStatusDescription":"Error",
                    "LifeCycleStatus":"Error",
                    "GrossAmount":"600",
                    "CurrencyCode":"USD"
                },
               {
                    "SalesOrderId":"0004",
                    "CustomerName":"Samsung",
                    "LifeCycleStatusDescription":"Completed",
                    "LifeCycleStatus":"Success",
                    "GrossAmount":"440",
                    "CurrencyCode":"USD"
                },
                {
                    "SalesOrderId":"0005",
                    "CustomerName":"Redmi",
                    "LifeCycleStatusDescription":"Error",
                    "LifeCycleStatus":"Error",
                    "GrossAmount":"220",
                    "CurrencyCode":"USD"
                }
            ]
            };

            //JSON Model instance
             
            var oModel = new JSONModel(oData);

            oModel.setDefaultBindingMode("OneWay");

            //Assign Model to View
            this.getView().setModel(oModel);
        },

        onExit: function() {
        //    alert("On Exit called");
        },

        onBeforeRendering: function() {

            // alert("On Before Rendering called");
        },

        onAfterRendering: function() {
        //    alert("On After Rendering called"); 
        },

        OnSearch: function() {

            alert("On Search event called");
        },

        OnSort: function() {
           alert("On Sort event called"); 
        //    this.getView().destroy();
        },

        OnGroup: function() {
           alert("On Group event called"); 
        }, 

        formatStatus: function(sStatus) {
            if (sStatus === "Success") {
                return "Success";
            } else if (sStatus === "Error") {
                return "Error";
            } else {
                return "None";
            }
        },
        
        //Open the Dialog  - Loading Fragment Dynamically
        onOpenOrderDetails: function () {
            
            //Creating Fragment Dynamically
            if (!this.MoreOrderDetailsDialog) {
                this.MoreOrderDetailsDialog = this.loadFragment({
                    name: "project1.view.fragments.MoreDetails"
                });
            }
            //Open the Dialog
            this.MoreOrderDetailsDialog.then(
                function (oDialog) {
                  oDialog.open();
                }
            );
        },
        
        //Close the Dialog
        onCloseOrderDetails: function () {
            this.byId("ShowingMoreDetails").close();
        }

    });
});