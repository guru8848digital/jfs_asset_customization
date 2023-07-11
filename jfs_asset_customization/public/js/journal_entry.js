frappe.ui.form.on('Journal Entry', {
    asset_expense: function(frm){
        if(frm.doc.asset_expense){
            frm.set_df_property('asset', "reqd", 1);
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
            frm.set_df_property('asset', "reqd", 0);
        }
    }
});