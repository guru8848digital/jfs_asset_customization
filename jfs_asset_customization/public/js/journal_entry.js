frappe.ui.form.on('Journal Entry', {
    refresh:function(frm){
        frm.set_df_property("asset","hidden",1)
        if(frm.doc.asset_expense){
            frm.set_df_property("asset","hidden",0)
        }
    },
    asset_expense: function(frm){
        if(frm.doc.asset_expense){
            frm.set_df_property('asset', "reqd", 1);
            frm.set_df_property('asset', "hidden", 0);
            cur_frm.fields_dict['asset'].get_query = function(doc) {
                return {
                    filters: {
                        "company": frm.doc.company,
                        "docstatus": 1
                    }
                }
            }
        }
        else{
            frm.set_value("asset",null)
            frm.set_df_property('asset', "reqd", 0);
            frm.set_df_property('asset', "hidden", 1);
        }
    }
});