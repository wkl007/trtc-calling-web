import type { App } from 'vue'
import { Button, Card, Checkbox, Col, ConfigProvider, Dropdown, Form, Input, Layout, Menu, Row } from 'ant-design-vue'

/**
 * antd 按需加载配置
 * @param app
 */
export function setupAntd (app: App<Element>): void {
  app
    .use(Button)
    .use(ConfigProvider)
    .use(Dropdown)
    .use(Menu)
    .use(Row)
    .use(Col)
    .use(Layout)
    .use(Form)
    .use(Input)
    .use(Checkbox)
    .use(Card)
}
