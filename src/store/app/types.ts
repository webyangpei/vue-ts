export interface Route {
	name?: string;
	path: string;
	component: any;
	redirect?: string;
	meta?: {
		title: string;
		icon: string
	};
}

export interface AppState {
	sidebar: string;
	permission_routers?: Route[];
	user_info: string;
}
