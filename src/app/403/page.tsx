import ErrorDisplay from "../../components/ErrorDisplay";

export default function Forbidden() {
  return (
    <ErrorDisplay
      code="403"
      titleZh="您没有权限访问此页面。"
      titleEn="Access Denied"
      descZh="您的客户端没有对此资源的访问权限（如未登录、凭证过期或角色权限不足）。如有疑问，请联系系统管理员或代理商主控制台。"
      descEn="The server understood the request but refuses to authorize it. Your credentials might be invalid or expired. Please contact support if you believe this is an error."
    />
  );
}
