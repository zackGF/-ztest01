import {Access} from "./access";

export const ACCESS:Access[]=[
  {id_:1,name_:'查询日志', link_: '/query/log'},
  {id_:2,name_:'系统监控信息',link_: '/base/dispatch'},
  {id_:3,name_:'进港运单',link_: '/query/awb'},
  {id_:4,name_:'航班状态',link_: '/query/dispatch_house_flight'},
  {id_:5,name_:'出港运单',link_: '/query/export_awb'},
  {id_:6,name_:'航空公司管理',link_: '/base/airway'},
  {id_:7,name_:'国家/地区信息管理',link_: '/base/country_or_area'},
  {id_:8,name_:'航空器备案管理',link_: '/base/flight_plan'},
  {id_:9,name_:'飞行员信息',link_: '/base/pilot_detail'},
]
