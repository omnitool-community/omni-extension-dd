//import './css/bootstrap-icons_font_bootstrap-icons.css'
import {OmniSDKClient} from 'omni-sdk';
const sdk = new OmniSDKClient("omni-extension-dd").init();

sdk.sendMessageToSession("Hello from Omni Extension!");
