import frappe
from erpnext.assets.doctype.asset_value_adjustment.asset_value_adjustment import AssetValueAdjustment

def on_submit(doc,method=None):
	if doc.asset_expense:
		asset_adj_doc = frappe.get_doc({
			"doctype": "Asset Value Adjustment",
			"company": doc.company,
			"date": doc.posting_date,
			"asset": doc.asset,
			"cost_center": doc.accounts[0].cost_center
		})
		AssetValueAdjustment.set_current_asset_value(asset_adj_doc)
		asset_adj_doc.new_asset_value = asset_adj_doc.current_asset_value + doc.total_debit
		asset_adj_doc.save(ignore_permissions=True)
		asset_adj_doc.submit()