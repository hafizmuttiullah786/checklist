export const formatViews = (num: number): string => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num?.toString();
};

type CookieData = {
  msisdn: string;
  token: string;
};

export const onpressLogoutBtn = () => {
  clearAllCookies();
  window.location.replace(window.location.origin + "/landing");
};

export const setCookie = (msisdn: string, token: string): void => {
  clearAllCookies();
  const data: CookieData = { msisdn, token };
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

// export const logout = () => {
//   clearAllCookies();
//   window.location.replace(window.location.origin + "/landing");
// };
export const logout = (val: string) => {
  clearAllCookies();
  localStorage.removeItem("isLogin");
  // window.location.replace(window.location.origin + "/landing");
  if (val === "network") {
    window.location.href = window.location.origin + "/";
  } else {
    window.location.reload();
  }
};
