AIUtil.SetContext Browser("creationtime:=0")
AIUtil("text_box", "Order:").SetText DataTable.Value("OrderNumber")
AIUtil("button", "Continue").Click
Browser("creationtime:=0").Sync																			'Wait for the browser to stop spinning

AIUtil.FindTextBlock("Outbound Delivery Create: Overview").CheckExists True
