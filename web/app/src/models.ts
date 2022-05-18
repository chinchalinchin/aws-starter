import { MetaConfig } from "./properties";

export interface Nav {
    path: string;
    nav_id?: string;
    nav_title?: string;
    page_title?: string;
    page_description?: string;
    group?: string;
    menu?: boolean;
    data?: any;
    children?: Nav[];
    meta?: MetaConfig[];
}