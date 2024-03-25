AIUtil.SetContext Browser("creationtime:=0")
AIUtil("button", "Save").Click
AIUtil("check_mark").Click
Set OutboundDeliveryMessage = AIRegex("Outbound Delivery \d+ was saved and")
AIUtil.FindTextBlock(OutboundDeliveryMessage).CheckExists True
DeliveryMessage = AIUtil.FindTextBlock(OutboundDeliveryMessage).GetText
DeliveryMessageArray = Split(DeliveryMessage," ")
DeliveryNumber = DeliveryMessageArray(2)
print "Delivery number is " & DeliveryMessageArray(2)
DataTable.Value("DeliveryNumber") = DeliveryMessageArray(2)
Reporter.ReportEvent micDone, "Delivery Number", "The Deliver Number from the popup window is " & DeliveryMessageArray(2) & "."
