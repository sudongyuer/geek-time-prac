# 浏览器渲染原理week2



# 浏览器工作原理

## 工作原理总论

**URl** -> `http`-> **HTML** -> `parse` -> **DOM** -> `css computing` -> **dom with css** -> `layout` -> **dom with position** -> `render` -> **bitmap**

## 状态机 ｜ 有限状态机

- 每一个状态都是一个机器
- 每一个机器知道下一个状态

mealy型状态机：每一个状态输出和当前状态以及输入有关
moore型状态机：每一个状态的输出只和当前状态有关，与输入无关

## HTTP请求

ISO-OSI七层网络模型
- 应用层 HTTP require('http')
- 表示层 HTTP require('http')
- 会话层 HTTP require('http')
- 传输层 TCP require('net')
- 网络层 INTERNET
- 数据链路层 4G/5G/WIFI
- 物理层 4G/5G/WIFI

TCP:
- 流
- 端口
- require('net')
IP:
- 包
- IP地址
- libnet/libpcap

HTTP：
- request
- response

## HTML

html标准（包含html状态机）

### 标签

- 开始标签
- 结束标签
- 自封闭标签

## CSS计算

[ inline, id,  class, tag]

## 概述都做了啥

- 手写http请求,用tcp的包获取连接后发送请求，获取数据并解析数据

- 拿到响应数据后解析http报文，进行词法(sanner)语法分析(parser) bodyParser，最终获取解析后的抽象语法树

- 拿到html后对html进行解析，拿到AST，途中在词法分析中对每个token进行CSSComputed，匹配dom所对应的css样式，最后拿到带有样式的抽象语法树 dom with css.

## 总结

- 对知识的总结存在描述的不准确，但是知道了大概的流程，其实就是基础太薄弱了。

- 期间也遇到了bug，通过debugger调试出来了.

- 坚持 坚持 坚持
