frappe.ui.form.on('Asset', {
    refresh: function(frm) {
        frm.set_df_property('cwip_asset', "read_only", 1);
    },
    asset_category: function(frm){
        if(frm.doc.asset_category){
            frappe.db.get_value('Asset Category', {'name': frm.doc.asset_category}, 'enable_cwip_accounting', (r) => {
                if (r && r.enable_cwip_accounting == 1) {
                    frm.set_value("cwip_asset",1)
                    frm.set_df_property('cwip_asset', "hidden", 0);                   
                }
                else{
                    frm.set_value("cwip_asset",0)
                    frm.set_df_property('cwip_asset', "hidden", 1);
                }
            });
        }
    }
});