import { IUserProfile } from "../types/post/Interface";
export const formatViews = (num: number): string => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num?.toString();
};

export interface CookieData {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
  department: string | null;
  token: string;
}

export const onpressLogoutBtn = () => {
  clearAllCookies();
  window.location.replace(window.location.origin + "/login");
};

export const setCookie = (profile:CookieData): void => {
  clearAllCookies();
  
  const data = {
    id: profile.id,
    name: profile.name,
    email: profile.email,
    status: profile.status,
    role: profile.role,
    department: profile.department,
    token: profile.token
  };
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  document.cookie = `data=${encodeURIComponent(
    JSON.stringify(data)
  )}; SameSite=Strict; path=/; expires=${expirationDate.toUTCString()}`;
};

export const getCookie = (name: string): CookieData | null => {
  try {
    const cookies: Record<string, string> = document.cookie
      .split(";")
      .reduce((acc: Record<string, string>, cookie: string) => {
        const [key, value] = cookie.split("=");
        acc[key.trim()] = decodeURIComponent(value);
        return acc;
      }, {});

    return cookies[name] ? (JSON.parse(cookies[name]) as CookieData) : null;
  } catch (e) {
    console.error("Error parsing cookie:", e);
    return null;
  }
};

export const clearAllCookies = (): void => {
  document.cookie.split(";").forEach((cookie: string) => {
    document.cookie = cookie
      .replace(/^ +/, "")
      .replace(/=.*/, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
  });
};


export const logout = (val: string) => {
  // clearAllCookies();
  // localStorage.removeItem("isLogin");
  // if (val === "network") {
  //   window.location.href = window.location.origin + "/login";
  // } else {
  //   window.location.reload();
  // }
};


export const initializeAuthToken = () => {
  if (!global.authToken) {
    const cookie = getCookie("data");
    if (cookie) {
      try {
        global.authToken = cookie?.token || "";
      } catch (err) {
        console.error("Invalid cookie for token:", err);
        global.authToken = "";
      }
    }
  }
};