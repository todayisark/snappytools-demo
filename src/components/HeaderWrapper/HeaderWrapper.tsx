import { useLocation } from "react-router-dom";
import Header from "./Header";

type Pathname =
  | "/"
  | "/toollist"
  | "/splitbill"
  | "/ledboard"
  | "/templates"
  | "/settings";

type Config = {
  [key in Pathname]: {
    title: string;
    showBack: boolean;
    showAction: boolean;
    action?: string;
    hidden?: boolean;
  };
};

const HeaderWrapper = () => {
  const location = useLocation();

  const config: Config = {
    "/": {
      title: "Tool List",
      showBack: false,
      showAction: true,
    },
    "/toollist": {
      title: "Tool List",
      showBack: false,
      showAction: true,
    },
    "/splitbill": {
      title: "Split Bill",
      showBack: true,
      showAction: true,
    },
    "/ledboard": {
      title: "LED Board",
      showBack: true,
      showAction: true,
      hidden: true,
    },
    "/templates": {
      title: "Templstes",
      showBack: true,
      showAction: true,
    },
    "/settings": {
      title: "Settings",
      showBack: true,
      showAction: true,
    },
  };

  const { title, showBack, showAction, action, hidden } =
    config[location.pathname as Pathname] || {};

  return (
    <>
      {!hidden ? (
        <Header
          title={title}
          showBack={showBack}
          showAction={showAction}
          action={action}
        />
      ) : null}
    </>
  );
};

export default HeaderWrapper;
