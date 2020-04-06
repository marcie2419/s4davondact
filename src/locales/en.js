export default (Blockly) => {

	if(Blockly){
		Blockly.Msg["BASE_BLOCKS"] = "Base blocks";
		Blockly.Msg["MESSAGE_RELATED_BLOCKS"] = "Message related blocks";
		Blockly.Msg["REPLY"] = "reply %1";
	
		Blockly.Msg["INIT"] = "Import Discord";
		Blockly.Msg["INIT_TOOLTIP"] = "Allows you to use Discord blocks!";
		Blockly.Msg["CLIENT_LOGIN"] = "Connect with token %1";
		Blockly.Msg["ON_MESSAGE"] = "When a message is received";
		Blockly.Msg["ON_CONNECTED"] = "When the bot is connected";
		Blockly.Msg["MESSAGE_CONTENT"] = "message content";
		Blockly.Msg["MESSAGE_AUTHOR"] = "%1 of message author";
		Blockly.Msg["USERNAME"] = "username";
		Blockly.Msg["NICKNAME"] = "nickname";
		Blockly.Msg["GET_GUILD"] = "find server %1 using %2";
		Blockly.Msg["NAME"] = "name";
		Blockly.Msg["GET_ROLE"] = "find role %1 from server %2 using %3";
		Blockly.Msg["GET_MEMBER"] = "find member %1 from server %2 using %3";
		Blockly.Msg["ADD_ROLE"] = "add role %1 to member %2";
		Blockly.Msg["MESSAGE_GUILD"] = "%1 of the server of the message";
		Blockly.Msg["MESSAGE_CHANNEL"] = "%1 of the channel of the message";
	}

	const messages = {
		untitled: "Untitled document",
		file: {
			title: "File",
			javascript: "Export to Javascript",
			open: "Open file...",
			save: "Save"
		},
		edit: {
			title: "Edit",
			undo: "Undo",
			redo: "Redo",
			clear: "Clear {blockCount} blocks"
		},
		lang: {
			title: "Language"
		}
	};

	return messages;
	
};