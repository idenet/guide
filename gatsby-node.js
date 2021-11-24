// 创建页面
function createPages({ actions }) {
  const { createPage } = actions
  // 获取模板的绝对路径
  const template = require.resolve("./src/templates/person.js")
  // 获取模板所需的数据
  const persons = [
    { slug: "zhangsan", name: "战三", age: 20 },
    { slug: "lisi", name: "战三1", age: 30 },
  ]
  // 根据模板和数据创建页面
  persons.forEach(person => {
    createPage({
      // 模板的绝对路径
      component: template,
      // 访问地址
      path: `/person/${person.slug}`,
      // 传递给模板的数据
      context: person,
    })
  })
}

module.exports = {
  createPages,
}
