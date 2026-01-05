export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag("config", "G-VDS2W1WM81", {
      page_path: path,
    });
  }
};
