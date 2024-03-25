AIUtil.SetContext Browser("creationtime:=0")
AIUtil("text_box", "Order:").SetText DataTable.Value("OrderNumber")
AIUtil("button", "Continue").Click

AIUtil.FindTextBlock("Outbound Delivery Create: Overview").CheckExists True
