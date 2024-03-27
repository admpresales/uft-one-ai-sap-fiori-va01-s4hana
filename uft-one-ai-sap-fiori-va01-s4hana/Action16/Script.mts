Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application
AIUtil("text_box", "Actual GI Date:").SetText FormatDateTime(Date, 2)
AIUtil.FindTextBlock("Picking").Click

AIUtil.FindTextBlock("PC", micWithAnchorAbove, AIUtil.FindTextBlock("Un", micWithAnchorOnLeft, AIUtil.FindTextBlock("Deliv. Qty"))).Click
wait 1
set objSendKey=CreateObject("WScript.shell")

objSendKey.SendKeys "+{TAB}"
objSendKey.SendKeys "+{TAB}"
objSendKey.SendKeys "+{TAB}"
'Storage location = 171A
objSendKey.SendKeys "171A"

objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys "{TAB}"
'PICKING QUANTITY = same value ordered
objSendKey.SendKeys DataTable.Value("OrderQuantity", "05_va01_order_details")


AIUtil.FindTextBlock("Post Goods Issue").Click
AIUtil.FindTextBlock("Outbound Delivery " & DataTable.Value("DeliveryNumber") & " has been saved").CheckExists True
AIUtil.FindTextBlock("Exit").Click

