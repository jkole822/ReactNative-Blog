import axios from "axios";

// Have to reset baseURL after restarting ngrok which
// expires after 8 hours
export default axios.create({
	baseURL: " http://98dca60e8f66.ngrok.io",
});
