import ErrorDisplay from "../components/ErrorDisplay";

export default function NotFound() {
  return (
    <ErrorDisplay
      code="404"
      titleZh="我们找不到您要查找的页面。"
      titleEn="We can't find the page you're looking for."
      descZh="该页面可能已被移动、删除，或者您可能输入了错误的网址。请核对 URL 后重试，或使用下方按钮返回系统首页。"
      descEn="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL and try again or use the buttons below."
    />
  );
}
