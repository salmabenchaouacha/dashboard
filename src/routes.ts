import React from "react";
import { RoleEnum } from "@/types/AuthModel";
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import PerformanceAb from './pages/PerformanceAb';
import Chart from './pages/Chart';
import Retention from './pages/Retention';
import Engagement from './pages/Engagement';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Revenus from './pages/Revenus';
import SupportClient from './pages/SupportClient';
import Prediction from './pages/Prediction';
import StatAb from './pages/StatAb';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';

export interface RouteConfig {
  path: string;
  component: React.ComponentType<unknown>;
  name: string;
  role: RoleEnum;
  layout: "guest" | "private";
}

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "StatAb Dashboard",
    component: StatAb,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/StatAb",
    name: "StatAb Dashboard",
    component: StatAb,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/Revenus",
    name: "Calendar",
    component: Revenus,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/Retention",
    name: "Retention et desabonnement",
    component: Retention,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/PerformanceAb",
    name: "Retention et desabonnement",
    component: PerformanceAb,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/Engagement",
    name: " L'utilisation et l'engagement",
    component:Engagement,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/SupportClient",
    name: "Support Client",
    component: SupportClient,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/Prediction",
    name: "Prediction",
    component: Prediction,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/forms/form-layout",
    name: "Form Layout",
    component: FormLayout,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/chart",
    name: "Basic Chart",
    component: Chart,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/ui/alerts",
    name: "Alerts",
    component: Alerts,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/ui/buttons",
    name: "Buttons",
    component: Buttons,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/login",
    name: "SignIn",
    component: SignIn,
    layout: "guest",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "/auth/signup",
    name: "Signup",
    component: SignUp,
    layout: "guest",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
  {
    path: "*",
    name: "StatAb Dashboard",
    component: StatAb,
    layout: "private",
    role: RoleEnum.ROOT || RoleEnum.APP_ADMIN,
  },
];

export default routes;
