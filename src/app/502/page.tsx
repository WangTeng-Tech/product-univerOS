import ErrorDisplay from "../../components/ErrorDisplay";

export default function BadGateway() {
  return (
    <ErrorDisplay
      code="502"
      titleZh="无法连接到上游服务器。"
      titleEn="Bad Gateway"
      descZh="univerOS 边缘网关无法从后端服务节点获取有效响应。系统核心服务可能正处于滚动维护中，请稍后刷新重试。"
      descEn="The proxy server received an invalid response from an upstream server. The core services might be performing a rolling update. Please refresh or try again later."
    />
  );
}
