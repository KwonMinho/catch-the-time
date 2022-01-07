import HomeIcon from "@mui/icons-material/Home";
import ForumIcon from "@mui/icons-material/Forum";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

export const SidebarMenuData = [
  {
    title: "홈",
    icon: <HomeIcon />,
    to: "/",
    sub: [],
  },
  {
    title: "커뮤니티",
    icon: <ForumIcon />,
    to: "/community",
    sub: ["자유게시판", "조행일기", "민물", "바다", "선상", "원투", "루어"],
  },
  {
    title: "낚시장터",
    icon: <LocalGroceryStoreIcon />,
    to: "/trade",
    sub: [],
  },
];
