import type { ILivechatDepartment, IRoom } from '@rocket.chat/core-typings';
import '@rocket.chat/ui-contexts';

declare module '@rocket.chat/ui-contexts' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface ServerMethods {
		'livechat:addMonitor': (...args: any[]) => any;
		'livechat:getAgentOverviewData': (...args: any[]) => any;
		'livechat:getAnalyticsChartData': (...args: any[]) => any;
		'livechat:getAnalyticsOverviewData': (...args: any[]) => any;
		'livechat:getRoutingConfig': (...args: any[]) => any;
		'livechat:removeCustomField': (...args: any[]) => any;
		'livechat:removeMonitor': (...args: any[]) => any;
		'livechat:removeTag': (...args: any[]) => any;
		'livechat:removeTrigger': (...args: any[]) => any;
		'livechat:removeUnit': (...args: any[]) => any;
		'livechat:returnAsInquiry': (rid: IRoom['_id'], departmentID?: ILivechatDepartment['_id']) => boolean;
		'livechat:sendTranscript': (...args: any[]) => any;
		'livechat:transfer': (...args: any[]) => any;
		'livechat:saveCustomField': (...args: any[]) => any;
		'livechat:saveDepartment': (...args: any[]) => any;
		'livechat:saveTag': (...args: any[]) => any;
		'livechat:saveTrigger': (...args: any[]) => any;
		'livechat:saveUnit': (...args: any[]) => any;
		'livechat:webhookTest': (...args: any[]) => any;
	}
}