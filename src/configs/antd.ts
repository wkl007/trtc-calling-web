import type { App } from 'vue'
import { Button, ConfigProvider } from 'ant-design-vue'

/**
 * antd 按需加载配置
 * @param app
 */
export function setupAntd (app: App<Element>): void {
  app
    .use(Button)
    .use(ConfigProvider)
}
