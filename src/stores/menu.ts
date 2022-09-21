import { defineStore } from "pinia";
import { PieChartOutlined, EditOutlined } from "@ant-design/icons-vue";

// type menus = {
//   key: any;
//   name: string;
//   icon: any;
//   isParent: boolean;
//   subMenus: any;
// };

const DashboarMenudIcon = PieChartOutlined;
const BlogMenuIcon = EditOutlined;

export const useMenuStore = defineStore({
  id: "menuStore",
  state: () => ({
    menuStore: [{}],
  }),
  getters: {
    exampleMenu: (state) =>
      (state.menuStore = [
        {
          key: 1,
          name: "Dashboard",
          link: "/admin/dashboard",
          icon: DashboarMenudIcon,
          isParent: false,
          subMenus: [],
        },
        {
          key: 2,
          name: "Blog",
          link: "/admin/blog",
          icon: BlogMenuIcon,
          isParent: false,
          subMenus: [],
        },
      ]),
  },
  actions: {
    // code ...
  },
});
