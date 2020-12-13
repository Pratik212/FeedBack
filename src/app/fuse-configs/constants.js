let API_URL = '';
let DOMAIN = '';
let AZURE_STORAGE_URL = '';
let FEEDBACK_URL = '';

if (process.env.REACT_APP_STAGE === 'dev') {
	DOMAIN = process.env.REACT_APP_DEV_API_DOMAIN;
	AZURE_STORAGE_URL = process.env.REACT_APP_AZURE_STORAGE_DEV_URL;
	FEEDBACK_URL = process.env.REACT_APP_FEEDBACK_DEV_URL;
} else if (process.env.REACT_APP_STAGE === 'staging') {
	DOMAIN = process.env.REACT_APP_STAGING_API_DOMAIN;
	AZURE_STORAGE_URL = process.env.REACT_APP_AZURE_STORAGE_STAGING_URL;
	FEEDBACK_URL = process.env.REACT_APP_FEEDBACK_STAGING_URL;
} else if (process.env.REACT_APP_STAGE === 'prod') {
	DOMAIN = process.env.REACT_APP_PROD_API_DOMAIN;
	AZURE_STORAGE_URL = process.env.REACT_APP_AZURE_STORAGE_PROD_URL;
	FEEDBACK_URL = process.env.REACT_APP_FEEDBACK_PROD_URL;
}
API_URL = `${DOMAIN}api`;

const constants = {
	DOMAIN,
	API_URL,
	AZURE_STORAGE_URL,
	// DOMAIN,
	// LOGO_URL,
	// fallbackImage
	FEEDBACK_URL
};

export default constants;
