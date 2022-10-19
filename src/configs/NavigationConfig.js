import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  CompassOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-planner',
      path: `${APP_PREFIX_PATH}/main/planner`,
      title: 'sidenav.main.planner',
      icon: CompassOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-catalog-items',
          path: `${APP_PREFIX_PATH}/main/catalog/items`,
          title: 'sidenav.main.catalog.items',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-categories',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'sidenav.main.catalog.categories',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'sidenav.main.catalog.collections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-clients-list',
          path: `${APP_PREFIX_PATH}/main/clients/list`,
          title: 'sidenav.main.clients.list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-clients-groups',
          path: `${APP_PREFIX_PATH}/main/clients/groups`,
          title: 'sidenav.main.clients.groups',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promocodes',
      path: `${APP_PREFIX_PATH}/main/promocodes`,
      title: 'sidenav.main.promocodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offlineStores',
      path: `${APP_PREFIX_PATH}/main/offline-stores`,
      title: 'sidenav.main.offlineStores',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-offlineStores-addresses',
          path: `${APP_PREFIX_PATH}/main/offline-stores/addresses`,
          title: 'sidenav.main.offlineStores.addresses',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-offlineStores-geoareas',
          path: `${APP_PREFIX_PATH}/main/offline-stores/geoareas`,
          title: 'sidenav.main.offlineStores.geoareas',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-newsletter',
      path: `${APP_PREFIX_PATH}/main/newsletter`,
      title: 'sidenav.main.newsletter',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}];

const systemNavTree = [
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.system',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'system-settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'sidenav.system.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system-app',
        path: `${APP_PREFIX_PATH}/system/app`,
        title: 'sidenav.system.app',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system-logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'sidenav.system.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  },
]

const navigationConfig = [
  ...mainNavTree,
  ...systemNavTree,
]

export default navigationConfig;
